const express = require('express')

const Users = require('../data/helpers/userDb');

const router = express.Router();


router.get('/', (req,res) => {
    Users.get()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({errorMessage: 'cant find users'}))
})




module.exports = router;