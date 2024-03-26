const DB = require("../../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AuthError } = require("../_errors/customError");

const authController = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new AuthError("email ou password manquant", "402");
      }
      const user = await DB.User.findOne({ where: { email } });
      if (user === null || !bcrypt.compareSync(password, user.password)) {
        throw new AuthError("Email ou mot de passe incorrect", "401");
      }
      // const token = jwt.sign({ userId: user.id, email: user.email }, 'votre_secret_key', { expiresIn: '10h' });
      const token = jwt.sign({ email: user.email }, "votre_secret_key", {
        expiresIn: "10h",
      });
      return res.json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
      next(error);
    }
  },
  async logout(req, res, next) {},
};

module.exports = authController;
