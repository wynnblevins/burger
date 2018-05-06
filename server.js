var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
var db = require('./models');

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

require('./controllers/burgers_controller.js')(app);
require('./controllers/html_endpoints.js')(app);

// object that is used when determining whether to drop the DB
// the database is not dropped by default... 
var syncObj = { force: false };

// check if argument for database drop exists
const DROP_ARG_NDX = 2;
if (process.argv[DROP_ARG_NDX] === 'freshDb') {
  syncObj.force = true; 
}

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync(syncObj).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});