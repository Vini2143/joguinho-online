
//variaveis
const canvas = document.getElementById('renderer')
const context = canvas.getContext('2d')

let gameObjects = {
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
    switch (command) {
        case 'w':
            gameObjects[id].y -= 10
            break

        case 'a':
            gameObjects[id].x -= 10
            break
        
        case 's':
            gameObjects[id].y += 10
            break

        case 'd':
            gameObjects[id].x += 10
            break

    }
}

