const db = require('../models');

const bodyParser = require("body-parser");


module.exports = function (app) {
    /** bodyParser.urlencoded(options)
     * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
     * and exposes the resulting object (containing the keys and values) on req.body
     */
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    /**bodyParser.json(options)
     * Parses the text as JSON and exposes the resulting object on req.body.
     */
    app.use(bodyParser.json());    
    
    app.get('/api/burger', (req, res) => {
        db.Burger.findAll({}).then(function (burgers) {
            res.send(burgers);
        }); 
    });

    app.post('/api/burger', (req, res) => {
        var newBurger = {
            devoured: false,
            burger_name: req.body.burger_name 
        };
        
        db.Burger.create(newBurger).then(function (burger) {
            res.send(burger);
        }); 
    });

    app.put('/api/burger/:id', (req, res) => {
        db.Burger.find({ where: {id: req.params.id} })
            .then((burger) => {
            db.Burger.update(
                { 
                    burger_name: burger.burger_name,
                    devoured: true
                },
                { where: { id: burger.id } }
            ).then((result) => {
                res.send(result);
            });
        });
    });
};