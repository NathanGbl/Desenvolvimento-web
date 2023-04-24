var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function quadrados(x,y,w,h,cor){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x,y,w,h);
}

function retas(x0, y0, x1, y1, cor){
    ctx.beginPath();
    ctx.strokeStyle = cor
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

function arcos(x0, y0, raio, algo, comprimento, cor_linha) {
    ctx.beginPath();
    ctx.arc(x0, y0, raio, algo, comprimento);
    ctx.strokeStyle = cor_linha;
    ctx.stroke(); 
}

function circulos(x0, y0, raio, algo, comprimento, cor_linha, cor_circulo) {
    ctx.beginPath();
    ctx.arc(x0, y0, raio, algo, comprimento, cor_linha, cor_circulo);
    ctx.fillStyle = cor_circulo;
    ctx.strokeStyle = cor_linha;
    ctx.fill();
    ctx.stroke();
}

function textos(tamanho_fonte, texto, cor, x0, y0) {
    ctx.beginPath();
    ctx.font = tamanho_fonte;
    ctx.fillStyle = cor
    ctx.fillText(texto, x0, y0);
}
quadrados(0, 0, 60, 60, 'blue');
quadrados(240, 0, 300, 60, 'red');
quadrados(0, 240, 30, 300, 'yellow');
quadrados(0, 270, 60, 300, 'yellow');
quadrados(240, 270, 300, 300, 'black');
quadrados(270, 240, 300, 300, 'black');
quadrados(0, 120, 30, 60, 'cyan');
quadrados(270, 135, 300, 30, 'cyan');
quadrados(110, 150, 40, 40, 'red');

retas(0, 150, 300, 150, 'green');
retas(60, 60, 150, 150, 'blue');
retas(150, 150, 240, 60, 'red');
retas(150, 150, 150, 300, 'black');

arcos(150, 150, 60, 3.15, 2*Math.PI, 'green');
arcos(150, 150, 80, 5.5, 2*Math.PI, 'green');
arcos(150, 150, 80, 3.15, 5*Math.PI/4, 'green');
arcos(150, 300, 80, 0, 3*Math.PI/2, 'green');
arcos(150, 300, 60, 4.7, 2*Math.PI, 'green');

circulos(150, 300, 40, 0, 2*Math.PI, 'green', 'cyan');
circulos(70, 220, 15, 0, 2*Math.PI, 'green', 'yellow');
circulos(225, 220, 15, 0, 2*Math.PI, 'green', 'yellow');
circulos(150, 115, 15, 0, 2*Math.PI, 'blue', 'cyan');

textos('18pt Arial', 'Canvas', 'black', 105, 60)