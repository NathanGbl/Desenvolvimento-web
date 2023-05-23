let numero_aleatorio = Math.floor(Math.random()*99)
var cont = 0
function randnum(){
    let usuario = parseInt(document.getElementById('numero').value)
    if (numero_aleatorio == usuario){
        document.getElementById('feed').innerHTML = 'Número igual'
        return document.getElementById('feed').style.setProperty("background-color", "green") + document.getElementById('feed').innerHTML('Número igual');
    }
    else if (numero_aleatorio > usuario){
        document.getElementById('feed').innerHTML = 'Número pequeno'
        cont += 1
        return document.getElementById('feed').style.setProperty("background-color", "red");
    }
    else if (numero_aleatorio < usuario){
        document.getElementById('feed').innerHTML = 'Número grande'
        cont += 1
        return document.getElementById('feed').style.setProperty("background-color", "red");
    }
    
    document.getElementById('tentativas').innerHTML = cont
}