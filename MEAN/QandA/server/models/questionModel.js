/* jshint esversion:6 */

// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create the schema
const QuestionSchema = new mongoose.Schema({
    q_text: String,
    desc: String,
    _answer: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
});

// register the schema as a model
mongoose.model('Question', QuestionSchema);
mongoose.Promise = global.Promise;