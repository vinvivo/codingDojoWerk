// Mongoose Dashboard - modular
var express = require("express");   // require express and path
var path = require("path");
var app = express();                // create the express app
var bodyParser = require("body-parser");    /* require bodyParser to handle
                                               post data */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));  // where to get static content

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');      // view engine setup

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');   // store the routing function in a variable
routes_setter(app); // invoke the routing function and pass it the "app" variable

var server = app.listen(8000, function() {
    console.log("Listening on port 8000");
});