const express = require('express')

const Users = require('../data/helpers/userDb');
const Posts = require('./posts-router')

const router = express.Router();


router.get('/', (req,res) => {
    Users.get()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({errorMessage: 'cant find users'}))
})



router.get('/:id', (req,res) => {
    const id = req.params.id
    Users.getById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => res.status(400).json({errorMessage: 'cant find specific user'}))
})

router.post('/', (req,res) => {
    Users.insert(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json({errorMessage: 'cant add new user'}))
})




module.exports = router;