var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./config/connection.js')(app);
require('./routing/apiRouting.js')(app);

app.use(express.static(path.resolve('./public')));

app.listen(PORT, () => console.log(`burger app listening on port ${PORT}`));