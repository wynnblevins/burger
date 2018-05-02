var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app) {
    app.get('/index', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    // default route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};