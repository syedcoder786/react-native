const express = require('express');
const router = express.Router();
const Review = require('../modals/Review');
// const auth = require('../middleware/auth')


router.post('/',  (req,res) => {
    const {name, review} = req.body;

    // console.log("it worked "+name)

    if(!name || !review){
        return res.status(400).json({msg:'Please enter all fields'})
    }
    else if(name.trim()==='' || review.trim()===''){
        return res.status(400).json({msg:'Please enter all fields'})
    }
    else if(name.length < 3 || name.length > 10){
        return res.status(400).json({msg:'Name must contain 3-10 characters'})
    }
    else if(review.length < 2 || review.length > 30 ){
        return res.status(400).json({msg:'Review must contain 2-30 characters'})
    }

    const newReview = new Review({
        name,
        review
    });

    newReview.save()
        .then(review => {
            res.json(review)
        })

})

module.exports = router;