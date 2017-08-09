// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
// require path for navigating file paths
var path = require('path');
// connect to MongoDB with Mongoose
mongoose.connect('mongodb://localhost/direwolfDB');
// create a variable that points to the models directory
var models_path = path.join(__dirname, "./../models");
// read all the files in the models_path and require each JS file
fs.readdirSync( models_path ).forEach( function(file) {
    if (file.indexOf ('.js') >= 0) {
        // require the file (to run the model --> register schema)
        require( models_path + '/' + file);
    }
});
