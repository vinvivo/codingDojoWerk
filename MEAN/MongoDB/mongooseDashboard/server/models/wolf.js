// models for Mongoose Dashboard - modular

var mongoose = require('mongoose');

// create the direwolf schema
var WolfSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    owner: { type: String, required: true, minlength: 2},
    living: Boolean
});

// register the schema as a model named "Wolf"
mongoose.model('Wolf', WolfSchema);