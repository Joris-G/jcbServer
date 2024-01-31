const userModel = require('../users/user.model');
const bcrypt = require('bcrypt');

const authController = {
    async login(req, res) {
        const { username, password } = req.body;
        const user = userModel.getUserByUsername(username);

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Authenticated successfully
        res.status(200).json({ message: 'Authentication successful' });
    },
};

module.exports = authController;