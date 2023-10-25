const canvas= document.getElementById("tela")
const ctx = canvas.getContext("2d")

let lastTime = performance.now()


const mainLoop = () => {
//tamanho do canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

//calcular o delta time

    const now = performance.now
    const deltaTime = now - lastTime
    lastTime = now

    for(let existencia of Existencias) {}

    requestAnimationFrame(mainLoop)
}

mainLoop()