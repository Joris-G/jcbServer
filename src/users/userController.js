const userModel = require('./user.model');

const userController = {
    async getAll(req, res) {
        const users = userModel.getAllUsers();

        if (!users) {
            return res.status(401).json({ message: "Il n'y a pas d'utilisateur à retourner" });
        }

        res.status(200).json({ users });
    },
    async create(req, res) {
        const { nom, prenom, email, role, service, projets, motDePasse } = req.body
        //TODO à finir
        const user = userModel.getUserByUsername(email);

        if (user) {
            return res.status(401).json({ message: "e-mail déjà utilisé" });
        }


        // if (!users) {
        //   return res.status(401).json({ message: "Il n'y a pas d'utilisateur à retourner" });
        //}

        res.status(201).json({ user });
    },
};

module.exports = userController;