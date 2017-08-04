var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: 'thuperthecret' }));

app.get('/', function(request, response) {
    if (request.session.counter == 'undefined') {
        request.session.counter = 0;
    }
    context = {
        counter: request.session.counter,
    }
    request.session.counter++;
    response.render('main', context);
});

app.get('/two', function(request, response) {
    request.session.counter++;
    response.redirect('/');
});

app.get('/reset', function(request, response) {
    request.session.counter = 0;
    response.redirect('/');
});

app.use(express.static(__dirname + "/static"));

app.listen(5000, function() {
    console.log("Listening on port 5000");
});