/* jshint esversion:6 */
const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');
const Question = mongoose.model('Question');

module.exports = {
    getAll: function(req, res) {
        Question.findOne({ _id: req.params.q_id })
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
    updateLikes: function(req, res){
        console.log("UpdateLikes a_id ", req.params.a_id);
        Answer.findOneAndUpdate({_id: req.params.a_id}, {$inc: {likes: 1}},
        function(err, response){
            if (err) {
                res.json(0);
            } else {
                res.json(response);
            }
        })
    },

    destroy: function(req, res) {
        console.log("answerController destroy ", req.params.a_id);
        Answer.remove( {_id: req.params.a_id}, function(errors, data) {
            if(errors) {
                console.log("Errors at constroller");
                res.json(0);
            } else {
                console.log("Deleted an answer successfully");
                res.json(data);
            }
        })
    }

}