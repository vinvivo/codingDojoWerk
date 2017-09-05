/* jshint esversion:6 */

// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create the schema
const AnswerSchema = new mongoose.Schema({
    user: String,
    a_text: String,
    details: String,
    likes: Number,
    _question: {type: Schema.Types.ObjectId, ref: 'Question'}
});

// register the schema as a model
mongoose.model('Answer', AnswerSchema);
mongoose.Promise = global.Promise;