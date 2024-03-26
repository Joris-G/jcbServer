const Sequelize = require("sequelize");
const DB = {};
DB.sequelize = new Sequelize({
  define: {
    timestamps: false,
  },
  database: "test",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
  // logging: (...msg) => console.log(msg),
  logging: console.log,
});

DB.User = require("./src/_models/user.model")(DB.sequelize);
DB.Project = require("./src/_models/projects.model")(DB.sequelize);
DB.Service = require("./src/_models/services.model")(DB.sequelize);
DB.Task = require("./src/_models/tasks.model")(DB.sequelize);
// DB.User = require('./src/_models/user.model');
// DB.User = require('./src/_models/user.model');
// DB.User = require('./src/_models/user.model');

// Définir les relations
DB.Project.belongsTo(DB.User, { as: "manager" });
DB.Project.hasOne(DB.User, { as: "createdBy" });
DB.Service.hasMany(DB.User);
DB.User.belongsTo(DB.Service);
DB.Service.belongsTo(DB.User, { as: "manager" });
DB.Task.belongsTo(DB.User, { as: "assignee" });
DB.Task.belongsToMany(DB.User, { through: "TaskFollowers", as: "followers" });
// Project.hasMany(Task); // Un projet peut avoir plusieurs tâches
// Project.hasMany(Document); // Un projet peut avoir plusieurs documents
// User.belongsToMany(Project, { through: 'test' });

DB.sequelize.sync({
  alter: true,
  // force: true,
  logging: false,
});

console.log("All models were synchronized successfully.");
module.exports = DB;
