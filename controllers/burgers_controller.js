module.exports = function (app) {
    app.get('/api/burger', (req, res) => {
        console.log('Inside burgers GET endpoint.');
    });

    app.post('/api/burger', (req, res) => {
        console.log('Inside burgers POST endpoint.');
    });

    app.put('/api/burger', (req, res) => {
        console.log('Inside burgers PUT endpoint');
    });
};