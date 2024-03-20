const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./router");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // Add cookieParser middleware
app.use((req, res, next) => {
  // Allow requests from localhost (adjust as needed)
  // res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use((req, res, next) => {
  // Allow requests from localhost (adjust as needed)
  console.log(req.body);
  console.error(req.url);
  next();
});

app.use("/api", router);

const DB = {};
DB.sequelize = require("./database");

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
  // alter: true,
  force: true,
  logging: false,
});

DB.sequelize
  .authenticate()
  .then(() =>
    console.log("Database connection has been established successfully.")
  )
  .then(() =>
    app.listen(PORT, async () =>
      console.log(`Server is running on port ${PORT}`)
    )
  )
  .catch((error) => console.error("Unable to connect to the database:", error));
