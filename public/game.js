
//variaveis

const movement = {
    w : gameObject => { 
        gameObject.y -= 10 
    },
    a : gameObject => { 
        gameObject.x -= 10 
    },
    s : gameObject => { 
        gameObject.y += 10 
    },
    d : gameObject => { 
        gameObject.x += 10 
    } 

}



//funções

export function render(context, gameObjects) {

    context.clearRect(0, 0, 600, 400);

    for (let playerId in gameObjects) {
        
        let player = gameObjects[playerId]

        context.fillStyle = 'red'
        context.fillRect(player.x, player.y, player.t, player.t)
    }

    requestAnimationFrame( () => {
        render(context, gameObjects)
    })
}


export function moveObject(object, command) {
    let moveFunction = movement[command]

    if (moveFunction) {
        moveFunction(object)
    }
}

export function addPlayer(gameObjects) {
    
}