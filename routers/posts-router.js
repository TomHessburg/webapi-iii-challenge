const express = require('express')

const Posts = require('../data/helpers/postDb.js');

const router = express.Router();

router.get('/', (req,res) => {  //gets all posts
    Posts.get()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({errorMessage: 'cant find posts'}))
})

router.get('/:id', (req, res) => { //returns the post with the id specified
    const id = req.params.id

    Posts.getById(id)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(400).json({errorMessage: 'cant find this specific post'}))
})

router.get('/specifiedUser/:id', (req, res) => { //returns all posts from a user
    const id = req.params.id

    Posts.get(id)
        .then(posts => {
            const filtered = posts.filter(post => post["user_id"] === Number(id))
            res.status(200).json(filtered)
        })
        .catch(err => res.status(400).json({errorMessage: 'cant find this specific post'}))
})

router.post('/', (req,res) => { //add posts, need a beter way to have a dynamic id...
    req.body.id = Math.floor(Math.random()*100000)
    Posts.insert(req.body)
        .then(r => res.status(201).json(r))
        .catch(err => res.status(400).json({errorMessage: 'couldnt add post'}))
})

router.delete('/:id', (req,res) => { //delete post by id
    const id = req.params.id

    Posts.remove(id)
        .then(num => res.status(200).json({message: 'post successfully deleted'}))
        .catch(err => res.status(400).json(err))
})

router.put('/:id', (req,res) => {
    const id = req.params.id
    Posts.update(id, req.body)
        .then(r => res.status(201).json({message: 'successfully updataed post'}))
        .catch(err => res.status(400).json({errMessage: 'error udpating post'}))

})


module.exports = router;