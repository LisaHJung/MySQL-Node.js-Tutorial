const express = require("express");
const mysqlConnection = require("../utils/database");

const Router = express.Router();

Router.get("/", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM quarterback_rankings",
    (err, results, fields) => {
      if (!err) {
        res.send(results);
      } else {
        console.log(err);
      }
    }
  );
});

Router.post("/", (req, res) => {
  let qb = req.body;
  const sql =
    "SET @ID = ?;SET @Name = ?;SET @Position = ?;SET @Team = ?;SET @OpposingTeam = ?;SET @JodySmith = ?;SET @EricMoody = ?;SET @JohnFerguson = ?;SET @FantasyData = ?; CALL Add_or_Update_QB(@ID, @Name, @Position, @Team, @OpposingTeam, @JodySmith, @EricMoody, @JohnFerguson, @FantasyData);";
  mysqlConnection.query(
    sql,
    [
      qb.ID,
      qb.Name,
      qb.Position,
      qb.Team,
      qb.OpposingTeam,
      qb.JodySmith,
      qb.EricMoody,
      qb.JohnFerguson,
      qb.FantasyData,
    ],
    (err, results, fields) => {
      if (!err) {
        results.forEach((element) => {
          if (element.constructor === Array) res.send(element);
        });
      } else {
        console.log(err);
      }
    }
  );
});

Router.put("/", (req, res) => {
  let qb = req.body;
  const sql =
    "SET @ID = ?;SET @Name = ?;SET @Position = ?;SET @Team = ?;SET @OpposingTeam = ?;SET @JodySmith = ?;SET @EricMoody = ?;SET @JohnFerguson = ?;SET @FantasyData = ?; CALL Add_or_Update_QB(@ID, @Name, @Position, @Team, @OpposingTeam, @JodySmith, @EricMoody, @JohnFerguson, @FantasyData);";
  mysqlConnection.query(
    sql,
    [
      qb.ID,
      qb.Name,
      qb.Position,
      qb.Team,
      qb.OpposingTeam,
      qb.JodySmith,
      qb.EricMoody,
      qb.JohnFerguson,
      qb.FantasyData,
    ],
    (err, results, fields) => {
      if (!err) {
        res.send(
          "The data for the selected quarterback has been successfully updated."
        );
      } else {
        console.log(err);
      }
    }
  );
});

Router.delete("/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM quarterback_rankings WHERE ID= ? ",
    [req.params.id],
    (err, results, fields) => {
      if (!err) {
        res.send("The selected quarterback has been successfully deleted.");
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = Router;
