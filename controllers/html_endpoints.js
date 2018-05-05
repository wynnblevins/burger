var eatenBurgers = [], uneatenBurgers = [];

module.exports = function (app) {
    app.get('/index', function (req, res) {
        console.log(res);
        
        //eatenBurgers = burgers.filter(burger => burger.devoured === true);
        //uneatenBurgers = burgers.filter(burger => burger.devoured === false);
        
        res.render('index', {eatenBurgers: eatenBurgers, uneatenBurgers: uneatenBurgers});         
    });

    app.get('/', function (req, res) {
        console.log(res);
        
        //eatenBurgers = burgers.filter(burger => burger.eaten === true);
        //uneatenBurgers = burgers.filter(burger => burger.eaten === false);
        res.render('index', {burgers: uneatenBurgers});
    });
};

