var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Connect to MongoDB with Mongoose
var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost/quoting_dojo');

var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/static")));


// make db accessible to router
app.use( function( req, res, next) {
    req.db = db;
    next();
});



var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    quotation: { type: String, required: true, minlength: 2},
    created_at: { type: Date, default: Date.now }
});
mongoose.model('User', UserSchema);  // sets UserSchema in Models as "User"
var User = mongoose.model('User');   // this instance of User is going to be called "User"

mongoose.Promise = global.Promise;

app.get('/', function(req, res) {
    res.render("index");
});

app.post('/quotes', function(req, res) {
    console.log("POST DATA:", req.body);
    // create a post with the name and quotation from the req.body
    var user = new User( { name: req.body.name, quotation: req.body.quotation, created_at: new Date() } );
    // save post data to the database and run a callback function if errors.
    user.save(function(err) {
        // if errors, console.log them
        if(err) {
            console.log("Uh oh. Something went wrong.");
            res.render('index', {title: 'You have errors!', errors: user.errors });
        } else {    // else, console.log results and redirect to root
            console.log("Successfully added new quotation.");
            res.redirect('/quotes');
        }
    });
});

app.get('/quotes', function(req, res) {
    User.find( {}, function(err, results) {
        if(err) {
            console.log("Uh oh. Something went wrong.");
        } else {
            res.render('quotes', { user: results });
        }
    });
});

var server = app.listen(8000, function() {
    console.log("Listening on port 8000");
});