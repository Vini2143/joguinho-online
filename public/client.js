import { gameClient } from './gameClient.js'


//variaveis 
const canvas = document.getElementById('renderer')
const context = canvas.getContext('2d')


//execução

document.addEventListener('keydown', event => {


})

const game = new gameClient()

const socket = io();

socket.on('connect', () => {
    console.log('conectado a id:' + socket.id)
})

socket.on('start', (objects) => {
    game.objects = objects
    console.log(game.objects)
})


game.render(context)

