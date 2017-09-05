/* jshint esversion:6 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();


app.use(bodyParser.json());
app.use(express.static('./../public/dist'));


// all database stuff
require('./config/mongoose.js');

// all routes here
require('./config/routes.js')(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
