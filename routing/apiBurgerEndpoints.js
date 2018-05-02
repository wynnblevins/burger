module.exports = function (app) {
    app.post('/api/burger', function (req, res) {
        console.log('inside api POST endpoint.');
    });
    
    // default route
    app.get('/api/burger', function (req, res) {
        console.log('inside api GET endpoint.');
    });
};