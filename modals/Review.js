const mongoose = require('mongoose');
// const { default: Vedio } = require('../client/src/components/Vedio');
const Schema = mongoose.Schema;

//Create Schema
const ReviewSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    review: {
        type:String,
        required:true
    },
    // date: {
    //     type:Date,
    //     default:Date.now
    // }
})

module.exports = Review = mongoose.model('reviews', ReviewSchema);