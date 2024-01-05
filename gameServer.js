

export class gameServer {

    constructor() {
        //variaveis

        this.objects = {}

        this.movements = {
            w : id => { 
                this.objects[id].y -= 10 
            },
            a : id => { 
                this.objects[id].x -= 10 
            },
            s : id => { 
                this.objects[id].y += 10 
            },
            d : id => { 
                this.objects[id].x += 10 
            } 

        }
    }

    //funções


    moveObject(id, command) {
        let moveFunction = movements[command]

        if (moveFunction) {
            moveFunction(id)
        }
    }

    addPlayer(id) {
        this.objects[id] = { x : 50, y : 50, t : 10 }
    }

    removePlayer(id) {
        delete this.objects[id]
    }
}