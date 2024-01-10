import { WebSocketServer } from 'ws'

import { Game } from '../public/game.js'
import { emitEvent } from './functions.js'
import { receiveEvent } from './functions.js'


//variáveis

const ws = new WebSocketServer({ port: 8080 })

const game = new Game()

//execução

let lastId = 0

ws.on('connection', (socket) => {

    lastId++
    socket.id = 'p'+ lastId

    console.log(`a user with id '${socket.id}' was connected`)
    game.addPlayer(socket.id)

    
    socket.send(emitEvent('start', game.objects))

    socket.on('message', message => {
        

        receiveEvent(message, 'test', data => {
            console.log('received ' + data)
        })
        

    })

    socket.on('close', () => {
        console.log(`a user with id '${socket.id}' was disconnected`)
    })
})


