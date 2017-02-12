// Dependencies 

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setting up Express App
var app = express();
var port = 8080;

// Parsing Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api.json" }));


// Linking to Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listens for Server Port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});