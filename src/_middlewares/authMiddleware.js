const jwt = require("jsonwebtoken");
const { AuthError } = require("../_errors/customError");
// Middleware d'authentification
const authMiddleware = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  try {
    if (!authorizationHeader) {
      throw new AuthError("Token manquant");
    }

    const token = authorizationHeader.replace("Bearer ", "");
    if (!token) {
      throw new AuthError("Accès non autorisé");
    }

    jwt.verify(token, "votre_secret_key", (err, decoded) => {
      console.log(decoded);
      if (err) {
        throw new AuthError("Token invalide");
      }
      req.userId = decoded.userId;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;
