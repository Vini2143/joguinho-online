//imports

import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

import { gameServer } from './gameServer.js'


//variaveis

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const game = new gameServer()

//execução


app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log('a user connected with id: '+ socket.id);

    game.addPlayer(socket.id)
    socket.emit('start', game.objects)

    socket.on('disconnect', () => {
        console.log('a user disconnected with id: '+ socket.id);

        game.removePlayer(socket.id)
    });
});









server.listen(3000, () => {
    console.log('server rodando na porta: 3000')
})













