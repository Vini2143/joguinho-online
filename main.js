//imports

import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

import { Game } from './public/game.js'



//variáveis

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const game = new Game()



//execução


app.use(express.static('public'))

io.on('connection', (socket) => {

    console.log(socket)//`a user with id '${socket.id}' was connected`)
    socket.emit('start', game.objects)

    let player = game.addPlayer(socket.id)
    io.emit('add', socket.id, player.color)
    
    socket.on('move', command => {

        game.moveObject(socket.id, command)
        io.emit('move', socket.id, command)
    })

    socket.on('disconnect', () => {
        console.log(`a user with id '${socket.id}' was disconnected`)

        game.removePlayer(socket.id)
        io.emit('remove', socket.id)
    });
});


server.listen(8080, () => {
    console.log('server is running...')
})


