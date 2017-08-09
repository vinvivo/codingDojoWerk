// routing for Mongoose Dashboard - modular

var mongoose = require('mongoose'),
    Wolf     = mongoose.model('Wolf');

mongoose.Promise = global.Promise;

module.exports = {
    show: function(req, res) {
        Wolf.find( {}, function(errors, data) {
            if(errors) {
                console.log("Uh oh. Something went wrong.");
            } else {
                res.render('index', { wolf: data });
            }
        });
    },
    showByID: function(req, res) {
        Wolf.find( {_id: req.params.id}, function(errors, data) {
            if(errors) {
                console.log(errors);
            } else {
                res.render('wolves', { wolf: data[0] });
            }
        });
    },
    create: function(req, res) {
        var wolf = new Wolf(
            {
                name: req.body.name,
                owner: req.body.owner,
                living: req.body.living
            }
        );
        wolf.save(function(err) {
            if(err) {
                console.log("Uh oh. Something went wrong.");
                res.render('new', {title: 'You have errors!', errors: wolf.errors });
            } else {
                console.log("Successfully added new direwolf.");
                res.redirect('/');
            }
        });
    },
    edit: function(req, res) {
        var wolfUpdate = Wolf.updateOne(
            { _id: req.params.id },
            { $set: { name : req.body.name,
                      owner: req.body.owner,
                      living: req.body.living
                    }
            }
        );
        wolfUpdate.save(function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("Successfully edited direwolf.");
                res.redirect('/');
            }
        })
    },
    destroy: function(req, res) {
        Wolf.deleteOne( {_id: req.params.id}, function(errors, data) {
            if(errors) {
                console.log(errors);
            } else {
                console.log("Deleted a direwolf successfully");
                res.render('index', {wolf: data});
            }
        });
    }
};