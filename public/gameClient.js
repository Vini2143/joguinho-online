
//variaveis


//funções

export class gameClient {
    
    constructor() {
        //variaveis

        this.objects = {}
    }


    render(context) {

        context.clearRect(0, 0, 600, 400);

        for (let playerId in this.objects) {
            
            let player = this.objects[playerId]

            context.fillStyle = 'red'
            context.fillRect(player.x, player.y, player.t, player.t)
        }

        requestAnimationFrame( () => {
            this.render(context)
        })
    }
}