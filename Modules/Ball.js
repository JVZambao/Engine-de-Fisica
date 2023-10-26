import Existency from "./Existency.js"
import vector from "./vector.js"

class Ball extends Existency {

    constructor (position){
        super()
        this.position = new vector(position[0], position[1])
        this.radius = 50
    }

    physhicProcess(deltaTime){

        super.physhicProcess
        console.log(deltaTime)
        this.position.sum(.05 * deltaTime)
    }

    render(ctx){
        super.render(ctx)

        ctx.beginPath ()
        ctx.strokeStyle = "red"
        ctx.arc(this.position.x, this.position.y, this.radius, 0 , Math.PI * 2)
        ctx.stroke()
    }

}
export default Ball