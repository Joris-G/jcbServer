const sequelize = require('./_server/database');
const User = require('./users/user.model');
const Client = require('./clients/client.model');
const Project = require('./projects/projects.model');
const Task = require('./tasks/tasks.model');
const Document = require('./documents/documents.model');
const models = { User, Project, Client, Task, Document };
console.log('hello')
// Initialize models
Object.values(models)
    .forEach(model => model.init(sequelize));

module.exports = models;