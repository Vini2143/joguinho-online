//imports

import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

import { moveObject } from './game.js'


//variaveis

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const gameObjects = {
    'p1' : { x : 50, y : 50, t : 10},
    'p2' : { x : 250, y : 10, t : 10},
    'p3' : { x : 450, y : 340, t : 10}
    
}

//execução

app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log('a user connected with id: '+ socket.id);
  });



console.log(gameObjects)



server.listen(3000, () => {
    console.log('server rodando na porta: 3000')
})













