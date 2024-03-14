const jwt = require('jsonwebtoken');
// Middleware d'authentification
const authMiddleware = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    try {

        const token = authorizationHeader.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Accès non autorisé' });
        }
        jwt.verify(token, 'votre_secret_key', (err, decoded) => {
            // console.log(token);
            if (err) {
                return res.status(401).json({ message: 'Token invalide' });
            }
            req.userId = decoded.userId;
            next();
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = authMiddleware;