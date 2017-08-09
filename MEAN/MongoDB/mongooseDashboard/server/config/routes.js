/* 
   Mongoose Dashboard - modular
*/

// load the models created in wolf.js

var mongoose = require('mongoose');
var Wolf = mongoose.model('Wolf');

mongoose.Promise = global.Promise;

var wolves = require('./../controllers/wolves.js');
module.exports = function(app) {
    app.get('/', function(req, res) {
        wolves.show(req, res);
    });
    
    app.get('/direwolves/:id', function(req, res) {
        wolves.showByID(req, res);
    });

    app.post('/direwolves', function(req, res) {
        wolves.create(req, res);
    });

    app.get('/new', function(req, res) {
        res.render("new");
    });

    app.get('/direwolves/edit/:id', function(req, res) {
        wolves.showByID(req, res);
    });

    app.post('/direwolves/:id', function(req, res) {
        wolves.edit(req, res);
    });

    app.post('/direwolves/destroy/:id', function(req, res) {
        wolves.destroy(req, res);
    });
};