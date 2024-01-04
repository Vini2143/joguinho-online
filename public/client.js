import { render } from './game.js'


//variaveis 
const canvas = document.getElementById('renderer')
const context = canvas.getContext('2d')


//execução

document.addEventListener('keydown', event => {


})


const socket = io();

socket.on('connect', () => {
    console.log('conectado a id:' + socket.id)
})


//render(context, gameObjects)

