import { Game } from './game.js'


//variaveis 
const canvas = document.getElementById('renderer')
const context = canvas.getContext('2d')


//execução

const game = new Game()

const socket = io();

socket.on('connect', () => {
    console.log(`connected as '${socket.id}'`)
})

socket.on('start', (objects) => {
    game.objects = objects
})

socket.on('add', (id, color) => {

    if (id == socket.id) {
        color = '#00FBFF'
    }
    
    game.addPlayer(id, color)
})

socket.on('remove', id => {
    game.removePlayer(id)
})

socket.on('move', (id, command) => {
    game.moveObject(id, command)
})


document.addEventListener('keydown', event => {

    //game.moveObject(socket.id, event.key)
    socket.emit('move', event.key)

})


game.render(context, socket.id)

