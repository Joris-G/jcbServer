const { Sequelize } = require('sequelize');

// Initialisation de la connexion à la base de données
const sequelize = new Sequelize({
    define:
    {
        timestamps: false,
    },
    database: 'test',
    username: 'root', password: '',
    host: 'localhost',
    dialect: 'mysql',
    logging: (...msg) => console.log(msg),

});

// Test de la connexion à la base de données
// Test de la connexion à la base de données
sequelize.authenticate()
    .then(async () => {
        console.log('Connection to the database has been established successfully.');

        // Créer la base de données si elle n'existe pas
        try {
            await sequelize.define('test2');
            console.log('Database created successfully (or already exists).');
        } catch (error) {
            console.error('Unable to create the database:', error);
        }
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;