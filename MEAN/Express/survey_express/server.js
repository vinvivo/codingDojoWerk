var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var app = express();
console.log("APP OBJECT: ", app);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: "thuperthecret" }));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/result', function (req, res) {
    req.session.name = req.body.name,
    req.session.location = req.body.location,
    req.session.language = req.body.language,
    req.session.comments = req.body.comments,
    res.redirect('/results');
});

app.get('/results', function (req, res) {
    context = {
        name: req.session.name,
        location: req.session.location,
        language: req.session.language,
        comments: req.session.comments,
    }
    res.render('results', context);
})

app.use(express.static(__dirname + "/static"));

app.listen(8000, function() {
    console.log("Listening on port 8000");
});