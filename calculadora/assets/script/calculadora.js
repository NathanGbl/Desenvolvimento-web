document.addEventListener('DOMContentLoaded', function() {
    var campo_texto = document.getElementById('resultado');
    var numeros = document.getElementById('numeros');
    var tipo_conta = document.getElementById('contas');
    var operador = ''

    numeros.addEventListener('click', function(event) {
        if (event.target.id == 'clear') {
            campo_texto.innerText = ''
        } else if (event.target.id == 1) {
            campo_texto.innerText += 1
        } else if (event.target.id == 2) {
            campo_texto.innerText += 2
        } else if (event.target.id == 3) {
            campo_texto.innerText += 3
        } else if (event.target.id == 4) {
            campo_texto.innerText += 4
        } else if (event.target.id == 5) {
            campo_texto.innerText += 5
        } else if (event.target.id == 6) {
            campo_texto.innerText += 6
        } else if (event.target.id == 7) {
            campo_texto.innerText += 7
        } else if (event.target.id == 8) {
            campo_texto.innerText += 8
        } else if (event.target.id == 9) {
            campo_texto.innerText += 9
        } else if (event.target.id == 'ponto') {
            campo_texto.innerText += '.'
        } else if (event.target.id == 0) {
            campo_texto.innerText += 0
        }
    })

    tipo_conta.addEventListener('click', function(event) {
        if (event.target.id == '-') {
            campo_texto.innerText += '-'
            operador = '-'
        } else if (event.target.id == '+') {
            campo_texto.innerText += '+'
            operador = '+'
        } else if (event.target.id == 'x') {
            campo_texto.innerText += 'x'
            operador = 'x'
        } else if (event.target.id == '/') {
            campo_texto.innerText += '/'
            operador = '/'
        } else if (event.target.id == 'contagem') {
            var numbers = campo_texto.innerText.split(operador)
            if (operador == '-') {
                let conta = parseFloat(numbers[0]) - parseFloat(numbers[1])
                campo_texto.innerText = conta
            } else if (operador == '+') {
                let conta = parseFloat(numbers[0]) + parseFloat(numbers[1])
                campo_texto.innerText = conta
            } else if (operador == 'x') {
                let conta = parseFloat(numbers[0]) * parseFloat(numbers[1])
                campo_texto.innerText = conta
            } else if (operador == '/') {
                let conta = parseFloat(numbers[0]) / parseFloat(numbers[1])
                campo_texto.innerText = conta
            }
        }
    })

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace') {
            campo_texto.innerText = ''
            console.log(campo_texto)

            // Condições para números

        } else if (event.key === '1') {
            campo_texto.innerText += 1
        } else if (event.key === '2') {
            campo_texto.innerText += 2
        } else if (event.key === '3') {
            campo_texto.innerText += 3
        } else if (event.key === '4') {
            campo_texto.innerText += 4
        } else if (event.key === '5') {
            campo_texto.innerText += 5
        } else if (event.key === '6') {
            campo_texto.innerText += 6
        } else if (event.key === '7') {
            campo_texto.innerText += 7
        } else if (event.key === '8') {
            campo_texto.innerText += 8
        } else if (event.key === '9') {
            campo_texto.innerText += 9
        } else if (event.key === '0') {
            campo_texto.innerText += 0
        } else if (event.key === '.') {
            campo_texto.innerText += '.'
        
            // Condições para contas

        } else if (event.key === '-')  {
            campo_texto.innerText += '-'
            operador = '-'
        } else if (event.shiftKey && event.key === '+') {
            campo_texto.innerText += '+'
            operador = '+'
        } else if (event.key === 'x' || event.shiftKey && event.key === '*') {
            campo_texto.innerText += 'x'
            operador = 'x'
        } else if (event.key === '/') {
            campo_texto.innerText += '/'
            operador = '/'
        } else if (event.key === 'Enter') {
            var numbers = campo_texto.innerText.split(operador)
            if (operador == '-') {
                let conta = numbers[0] - numbers[1]
                campo_texto.innerText = conta
            } else if (operador == '+') {
                let conta = numbers[0] + numbers[1]
                campo_texto.innerText = conta
            } else if (operador == 'x') {
                let conta = numbers[0] * numbers[1]
                campo_texto.innerText = conta
            } else if (operador == '/') {
                let conta = numbers[0] / numbers[1]
                campo_texto.innerText = conta
            }
        }
    })
})
