/* jshint esversion:6 */
const Answers = require('../controllers/answerController.js');
const Questions = require('../controllers/questionController.js');
const path = require('path');

module.exports = function (app) {
    app.get('/questions', Questions.getAll);
    app.post('/questions', Questions.create);
    app.get('/questions/:id', Questions.getOne);
    app.get('answers', Answers.getAll);
    app.post('/answers/:q_id', Answers.create);
    app.put('/answers/:a_id', Answers.updateLikes);

    app.all("*", (req,res) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}