const express = require("express");
const mysqlConnection = require("../utils/database");

const Router = express.Router();

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM quarterback_rankings", (err, results, fields) => {
    if (!err) {
      res.send(results);
    } else {
      console.log(err);
    }
  });
});



module.exports = Router;
