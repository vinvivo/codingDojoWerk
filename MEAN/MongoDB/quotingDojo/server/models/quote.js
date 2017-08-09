// require mongoose
var mongoose = require('mongoose');

// create the schema
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    quotation: { type: String, required: true, minlength: 2},
    created_at: { type: Date, default: Date.now }
});

// register the schema as a model named "User"
mongoose.model('User', UserSchema);