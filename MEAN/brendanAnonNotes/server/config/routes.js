var notes = require('../controllers/AnonymousNotes.js');
var path = require('path');

module.exports = function (app) {
    app.post('/create', notes.create);
    app.get('/display', notes.display);


    app.all("*", (req,res) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}