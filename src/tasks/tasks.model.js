const { DataTypes } = require('sequelize');
const sequelize = require('../_server/server');
const User = require('../users/user.model'); // Importer le modèle d'utilisateur

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

// Définir les relations
Task.belongsTo(User, { as: 'assignee' });
Task.belongsToMany(User, { through: 'TaskFollowers', as: 'followers' });


module.exports = Task;