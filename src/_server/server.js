
const { Sequelize } = require('sequelize');

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

module.exports = sequelize;
