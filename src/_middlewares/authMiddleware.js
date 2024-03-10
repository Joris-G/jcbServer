const jwt = require('jsonwebtoken');
// Middleware d'authentification
const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Accès non autorisé' });
    }
    jwt.verify(token, 'votre_secret_key', (err, decoded) => {
        console.log(decoded, token, err);
        if (err) {
            return res.status(401).json({ message: 'Token invalide' });
        }
        req.userId = decoded.userId;
        next();
    });
};

module.exports = authMiddleware;