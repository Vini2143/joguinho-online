import { emitEvent } from './functions.js'
import { receiveEvent } from './functions.js'

const ws = new WebSocket('ws://localhost:8080');

ws.onerror = function (error) { 
  console.log(error) 
}

ws.onopen = function () {

  ws.send(emitEvent('test', 'anything'))
  
}


ws.onmessage = function (message) {

  receiveEvent(message.data, 'start', data => {
    console.log(data)
  })
  
}

