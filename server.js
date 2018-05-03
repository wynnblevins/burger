var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();

require('./controllers/burgers_controller.js')(app);
require('./controllers/html_endpoints.js')(app);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/public', express.static(__dirname + "/public"))

app.listen(PORT, () => console.log(`burger app listening on port ${PORT}`));