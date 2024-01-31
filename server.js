const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser()); // Add cookieParser middleware
app.use((req, res, next) => {
    // Allow requests from localhost (adjust as needed)
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/api', router);

module.exports = app;