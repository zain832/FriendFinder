// Dependencies

var path = require("path");

module.exports = function(app) {

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname + "/public/home.html"));
	});

	app.use(express.static(path.join(__dirname, "/app/public/")));
};