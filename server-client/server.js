import { WebSocketServer } from 'ws'

import { Game } from '../public/game.js'



//variáveis

const ws = new WebSocketServer({ port: 8080 })

const game = new Game()

//execução
game.addPlayer('tudojunto')
game.addPlayer('qualquercoisa')
game.addPlayer('fsfdfds')

ws.on('connection', (socket) => {

    console.log(`a user was connected`)
    socket.send('message', game.objects)
})


/* server.listen(8080, () => {
    console.log('server is running...')
}) */