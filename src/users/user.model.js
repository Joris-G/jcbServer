const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../_server/server');

const User = sequelize.define('User', {
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    roles: {
        type: DataTypes.STRING,
        defaultValue: 'basic' // Valeur par défaut
    },
    services: {
        type: DataTypes.STRING
    },
    projects: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
    // , {
    //     sequelize, // Utilisation de l'instance Sequelize
    //     modelName: 'User', // Nom du modèle
    //     tableName: 'users' // Nom de la table dans la base de données
    // }
);

module.exports = User;
