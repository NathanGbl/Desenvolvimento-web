var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left
    let y_mouse = evento.clientY - rect.top
    if (x_mouse >= 0 && x_mouse <= 270 && y_mouse >= 0 && y_mouse <= 270){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : x_mouse,
            y : y_mouse,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    } else if (x_mouse < 0 && y_mouse < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : 0,
            y : 0,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    } else if(x_mouse > 270 && y_mouse < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : 270,
            y : 0,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    } else if (x_mouse > 270 && y_mouse > 270) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : 270,
            y : 270,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    } else if (x_mouse < 0 && y_mouse > 270) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : 0,
            y : 270,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    } else if (x_mouse > 270) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : 270,
            y : y_mouse,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    } else if (x_mouse < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : 0,
            y : y_mouse,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    } else if (y_mouse > 270) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : x_mouse,
            y : 270,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    } else if (y_mouse < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : x_mouse,
            y : 0,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    } else if (x_mouse < 0 && y_mouse < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : 0,
            y : 0,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(0, 0, quadrado.largura, quadrado.altura)
    } else if (x_mouse > 270 && y_mouse > 270) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var quadrado = {
            x : 270,
            y : 270,
            largura : 30,
            altura : 30,
            cor : 'red'
        }
        ctx.fillStyle = quadrado.cor
        ctx.fillRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura)
    }
})