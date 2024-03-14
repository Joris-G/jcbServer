const { DataTypes } = require('sequelize');
const sequelize = require('../../server');
const Project = require('./projects.model');

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

});


Client.hasMany(Project);
Project.belongsTo(Client); // Un projet appartient à un client

module.exports = Client;