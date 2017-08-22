/* jshint esversion:6 */

// require mongoose
const mongoose = require('mongoose');
// create the schema
const QuestionSchema = new mongoose.Schema({
    q_text: String,
    desc: String,
    _answer: {type: mongoose.Schema.ObjectId, ref: 'Answer'}
});

// register the schema as a model
mongoose.model('Question', QuestionSchema);
mongoose.Promise = global.Promise;