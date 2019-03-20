const express = require('express')

const Posts = require('../data/helpers/postDb.js');

const router = express.Router();

router.get('/', (req,res) => {
    Posts.get()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({errorMessage: 'cant find posts'}))
})



router.get('/', (req,res) => {
    res.status(404).json('hooked up posts!')
})




module.exports = router;