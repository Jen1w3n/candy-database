const express = require('express')
const router = express.Router();
const Candy = require('../models/candy')
const checkauth = require('../check-auth')

// https://www.json.org/json-en.html\
router.get('', (req, res) => 
{
    Candy.find().then((candies)=>{
        res.json(
            {
                message:'Candies found',
                candies:candies
            }
        )
    })
})

router.post('', checkauth, (req, res) =>{
    const candy = new Candy (
        {
            id: req.body.id,
            name: req.body.name
        }
    )
    candy.save().then(()=>{
    res.status(201).json(
    {
        message: 'Candy created',
        candy:candy
    })
    })
})

router.delete('/:id', checkauth, (req, res)=>{
    Candy.deleteOne({_id: req.params.id})
    .then((result)=>
    {
        res.status(200).json({message: "Candy deleted."});
    });
})

module.exports = router