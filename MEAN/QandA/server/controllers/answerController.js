/* jshint esversion:6 */
const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');
const Question = mongoose.model('Question');

module.exports = {
    getAll: function(req, res) {
        Question.findOne({ _id: req.params.id })
            .populate('_answer')
            .exec(function(errors, question) {
                if(errors) {
                    res.status(500).json(errors);
                } else {
                    res.json(question)
                }
            });
    },
    create: function(req, res) {
        Question.findOne({ _id: req.params.q_id }, function(errors, question) {
            let answer = new Answer(req.body);
            answer._question = question._id;
            answer.save( function(errors) {
                question._answer.push(answer);
                question.save( function(errors) {
                    if(errors){
                        res.status(500).json(errors);
                    } else {
                        console.log('successfully added an answer');
                        res.json(true);
                    }
                })
            })
        })

    },
    updateLikes: function(req, res) {
        Answer.findOneAndUpdate({ _id: req.params.a_id }, {$inc: {"likes": 1}});
    },
}