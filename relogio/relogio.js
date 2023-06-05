var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    const data = new Date
    let hrs = data.getHours()
    let mins = data.getMinutes()
    let sec = data.getSeconds()
    if (hrs < 10) hrs = '0' + hrs
    if (mins < 10) mins = '0' + mins
    if (sec < 10) sec = '0' + sec
    horas.textContent = hrs
    minutos.textContent = mins
    segundos.textContent = sec
})