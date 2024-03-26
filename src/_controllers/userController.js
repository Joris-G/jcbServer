const { UserError, RequestError } = require("../_errors/customError");
const DB = require("../../database");
const bcrypt = require("bcrypt");

const userController = {
  async getAll(req, res) {
    const users = userModel.getAllUsers();

    if (!users) {
      return res
        .status(401)
        .json({ message: "Il n'y a pas d'utilisateur à retourner" });
    }

    res.status(200).json({ users });
  },
  async create(req, res, next) {
    try {
      const {
        lastname,
        firstname,
        email,
        roles,
        services,
        projects,
        password,
      } = req.body;
      if (!lastname || !firstname || !email || !password) {
        throw new RequestError("Missing parameter", "401");
      }
      const findUser = await DB.User.findOne({ where: { email } });

      if (findUser) {
        throw new UserError({ message: "e-mail déjà utilisé" }, "401");
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = await DB.User.create({
        lastname,
        firstname,
        email,
        roles,
        services,
        projects,
        password: hashedPassword,
      });
      if (!user) {
        throw new UserError(
          "Echec lors de la création de l'utilisateur",
          "401"
        );
      }
      return res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
