/* jshint esversion:6 */

// require mongoose
const mongoose = require('mongoose');
// create the schema
const AnswerSchema = new mongoose.Schema({
    user: String,
    a_text: String,
    details: String,
    likes: Number,
    _question: {type: mongoose.Schema.ObjectId, ref: 'Question'}
});

// register the schema as a model
mongoose.model('Answer', AnswerSchema);
mongoose.Promise = global.Promise;