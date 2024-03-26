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

const DB = require("./database");

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
