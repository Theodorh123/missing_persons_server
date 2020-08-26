// import modules/dependencies
const express = require("express");
const cors = require("cors");

// creating an instance of express
const app = express();

// applying cors middleware
app.use(cors());

module.exports = app;