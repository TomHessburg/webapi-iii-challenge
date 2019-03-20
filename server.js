const express = require('express');

const postsRouter = require('./routers/posts-router');
const usersRouter = require('./routers/users-router.js')

const server = express();

const makeUpperCase = (req,res,next) => {
    if(req.body.name){
        req.body.name = req.body.name.toUpperCase();
    }
    next();
}

server.use(express.json())
server.use(makeUpperCase);
server.use('/api/posts', postsRouter)
server.use('/api/users', usersRouter)

server.get('/', (req,res) => {
    res.send('root');
})

module.exports = server;
