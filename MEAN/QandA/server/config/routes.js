/* jshint esversion:6 */
const Answers = require('../controllers/answerController.js');
const Questions = require('../controllers/questionController.js');
const path = require('path');

module.exports = function (app) {
    app.get('/questions', Questions.getAll);
    app.post('/questions', Questions.create);
    app.get('/questions/:id', Questions.getOne);
    app.get('/answers/:q_id', Answers.getAll);
    app.post('/answers/:q_id', Answers.create);
    app.get('/answerslikes/:a_id', Answers.updateLikes);
    app.delete('/answers/:a_id', Answers.destroy);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./../public/dist/index.html"))
    });
}