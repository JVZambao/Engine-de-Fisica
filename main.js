
import Ball from "./Modules/Ball.js"



const canvas = document.querySelector("tela")
canvas.width = window.innerWidth
canvas.height = window.innerHeight


const ctx = canvas.getContext("2d")
const Existencias = new Array()
const Ball = new Ball([0,0])
Existencias.push(Ball)

let lastTime = performance.now()


const mainLoop = () => {
//tamanho do canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

//calcular o delta time

    const now = performance.now
    const deltaTime = now - lastTime
    lastTime = now

    for(let existencia of Existencias) {
        existencia.physicsProcess(deltaTime)
        existencia.render(ctx)
    }

    requestAnimationFrame(mainLoop)
}

mainLoop()