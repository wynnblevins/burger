const Burger = require('../models/burger.js');

module.exports = function (app) {
    app.get('/api/burger', (req, res) => {
        console.log('Inside burgers GET endpoint.');
        return Burger.findAll({}).then(function (burgers) {
            console.log(burgers);
        }); 
    
    });

    app.post('/api/burger', (req, res) => {
        console.log('Inside burgers POST endpoint.');
    });

    app.put('/api/burger', (req, res) => {
        console.log('Inside burgers PUT endpoint');
    });
};