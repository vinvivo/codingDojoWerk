/* jshint esversion: 6 */
/* This file is a model of the 'post' collection from my mLab mongoDB named "codepostnet-vinvivo" 
   After creating this model, make sure to require it in api.js
 */

const mongoose = require('mongoose');   // mongoose enables communication with mongoDB
const Schema = mongoose.Schema;         // new instance of Schema from mongoose

const postSchema = new Schema({         // create a model that is a new instance of Schema called 'postSchema'
    title: String,
    url: String,
    description: String
});

module.exports = mongoose.model('post', postSchema);    // defines what will be brought in when another module imports/"requires" this model