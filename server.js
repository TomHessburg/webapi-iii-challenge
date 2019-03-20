const express = require('express');

const postsRouter = require('./routers/posts-router');
const usersRouter = require('./routers/users-router.js')

const server = express();

server.use(express.json())
server.use('/api/posts', postsRouter)
server.use('/api/users', usersRouter)

server.get('/', (req,res) => {
    res.send('root');
})

module.exports = server;
