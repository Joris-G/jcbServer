const { DataTypes } = require('sequelize');
const sequelize = require('../_server/server');

const Document = sequelize.define('Document', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Autres propriétés du document
});

module.exports = Document;