const userModel = require("../_models/user.model");
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
  async create(req, res) {
    const { lastname, firstname, email, roles, services, projects, password } =
      req.body;
    if (!lastname || !firstname || !email || !password) {
      throw new Error("test");
    }
    //TODO à finir
    try {
      const findUser = await userModel.findOne({ where: { email } });

      if (findUser) {
        return res.status(401).json({ message: "e-mail déjà utilisé" });
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = await userModel.create({
        lastname,
        firstname,
        email,
        roles,
        services,
        projects,
        password: hashedPassword,
      });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Echec lors de la création de l'utilisateur" });
      }
      res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
};

module.exports = userController;
