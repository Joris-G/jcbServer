const userModel = require('../users/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    async login(req, res) {
        const { email, password } = req.body;
        try {
            console.log(email);
            const user = await userModel.findOne({ where: { email } });
            console.log(user);
            if (user === null || !bcrypt.compareSync(password, user.password)) {
                console.log(password);
                return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
            }
            // const token = jwt.sign({ userId: user.id, email: user.email }, 'votre_secret_key', { expiresIn: '10h' });
            const token = jwt.sign({ email: user.email }, 'votre_secret_key', { expiresIn: '10h' });
            console.log("Token : " + token);
            res.json({ token, user: { id: user.id, email: user.email } });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
};

module.exports = authController;