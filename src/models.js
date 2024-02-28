const sequelize = require('./_server/database');
const User = require('./users/user.model');

const models = { User };
console.log('hello')
// Initialize models
Object.values(models)
    .forEach(model => model.init(sequelize));

module.exports = models;