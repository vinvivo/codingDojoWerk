// load the User model created in the quote.js file

var mongoose = require('mongoose'),
    User     = mongoose.model('User');   // this instance of User is going to be called "User"

mongoose.Promise = global.Promise;

var quotes = require('./../controllers/quotes.js');
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render("index");
    });

    app.post('/quotes', function(req, res) {
        quotes.create(req, res);
    });

    app.get('/quotes', function(req, res) {
        quotes.show(req, res);
    });
};