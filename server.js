const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const qbRoutes = require("./routes/qb");

const app = express();

app.use(bodyParser.json());

app.use(qbRoutes);

app.listen(4000);
