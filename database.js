const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    define:
    {
        timestamps: false,
    },
    database: 'test',
    username: 'root', password: '',
    host: 'localhost',
    dialect: 'mysql',
    // logging: (...msg) => console.log(msg),
    logging: console.log,

});

console.log("All models were synchronized successfully.");
module.exports = sequelize;