const express = require('express')

const Users = require('../data/helpers/userDb');
const Posts = require('./posts-router')

const router = express.Router();


router.get('/', (req,res) => { //return list of users
    Users.get()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({errorMessage: 'cant find users'}))
})

router.get('/:id', (req,res) => { //returns user by id
    const id = req.params.id
    Users.getById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => res.status(400).json({errorMessage: 'cant find specific user'}))
})

router.post('/', (req,res) => { //create new user. users name will be set to uppercase by middleware
    Users.insert(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json({errorMessage: 'cant add new user'}))
})

router.delete('/:id', (req,res) => { //delete a user by id, tho not working i assume because of a database error
    const id = req.params.id

    Users.remove(id)
        .then(num => res.status(200).json({message: 'user successfully deleted'}))
        .catch(err => res.status(400).json(err))
})

router.put("/:id", (req,res) => { //update users username at id of specific user
    const id = req.params.id
    Users.update(id, req.body)
        .then(r => res.status(201).json({message: 'successfully updataed user'}))
        .catch(err => res.status(400).json({errMessage: 'error udpating user'}))

})


module.exports = router;