var express = require("express");
// express is a function, so it needs to be invoked
var app = express();
// we need body-parser to read the response object
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
    // response.send("<h1>Hello, Express</h1>");
    var array = [
        {name: "Vinney", pet: "Rufus"},
        {name: "Vi", pet: "Pennie"},
    ]
    response.render('index', {users: array});   // users is like "context"
})

app.use(express.static(__dirname + "/static"), function() {
    console.log(__dirname);
});

app.listen(8000, function() {
    console.log("Listening on port 8000");
})