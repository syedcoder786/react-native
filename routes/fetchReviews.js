const express = require('express');
const router = express.Router();
const Review = require('../modals/Review');


router.get('/', (req,res) => {
    console.log("server response")
    Review.find()
        // .sort({ date: -1 })
        .then(reviews => {
            // console.log(reviews)
            res.json(reviews)
        })

})

module.exports = router;