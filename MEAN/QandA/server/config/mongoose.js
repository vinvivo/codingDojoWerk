/* jshint esversion:6 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const fs = require('fs');
const path = require('path');

const promise = mongoose.connect('mongodb://localhost/QandA', {
    useMongoClient: true
});

promise.then(
    ()=>{console.log('connected to database')}
);

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});