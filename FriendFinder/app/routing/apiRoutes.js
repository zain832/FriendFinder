// Dependencies
var connection = require("../server.js");


// Routing
module.exports = function(app) {

  // Retreiving Results
  app.get("/data/friends", function(req, res) {

    var dbQuery = "SELECT * FROM friends";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

  // Posting Results
  app.post("/data/friends", function(req, res) {

    console.log("Results: ");
    console.log(req.body);

    var dbQuery = "INSERT INTO friends (author, body, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
      console.log("Survey Results.");
      res.json(result);
      res.end();
    });

  });

};