var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    show: function(req, res) {
        User.find( {}, function(err, results) {
            if(err) {
                console.log("Uh oh. Something went wrong.");
            } else {
                res.render('quotes', { user: results });
            }
        });
    },
    create: function(req, res) {
         // create a post with the name and quotation from the req.body
        var user = new User(
            {
                name: req.body.name,
                quotation: req.body.quotation,
                created_at: new Date()
            }
        );
        // save post data to the database and run a callback function if errors.
        user.save(function(err) {
            // if errors, console.log them
            if(err) {
                console.log("Uh oh. Something went wrong.");
                res.render('index', {title: 'You have errors!', errors: user.errors });
            } else {    // else, console.log results and redirect to root
                console.log("Successfully added new quotation.");
                res.redirect('/quotes');
            }
        });
    }
};