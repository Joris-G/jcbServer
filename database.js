const { Sequelize } = require('sequelize');

// Initialisation de la connexion à la base de données
const sequelize = new Sequelize({
    define:
    {
        timestamps: false,
    },
    database: 'test1',
    username: 'root', password: '',
    host: 'localhost',
    dialect: 'mysql'

});

// Test de la connexion à la base de données
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;