
//variaveis
const canvas = document.getElementById('renderer')
const context = canvas.getContext('2d')

const movement = {
    w : id => { 
        gameObjects[id].y -= 10 
    },
    a : id => { 
        gameObjects[id].x -= 10 
    },
    s : id => { 
        gameObjects[id].y += 10 
    },
    d : id => { 
        gameObjects[id].x += 10 
    } 

}

const gameObjects = {
        'p1' : { x : 50, y : 50, t : 10},
        'p2' : { x : 250, y : 10, t : 10},
        'p3' : { x : 450, y : 340, t : 10}
        
    }

//execução

document.addEventListener('keydown', event => {
    
    moveObject('p1', event.key)

})

render()


//funções

function render() {

    context.clearRect(0, 0, 600, 400);

    for (let playerId in gameObjects) {
        
        let player = gameObjects[playerId]

        context.fillStyle = 'red'
        context.fillRect(player.x, player.y, player.t, player.t)
    }

    requestAnimationFrame(render)
}


function moveObject(id, command) {
    let moveFunction = movement[command]
    
    if (moveFunction) {
        moveFunction(id)
    }
}

