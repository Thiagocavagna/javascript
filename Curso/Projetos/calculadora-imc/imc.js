function calcular () {
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
  //  var altura = Number(txtaltura.value)
    var peso = document.getElementById('peso').value
    //var peso = Number(txtpeso.value)
    var res = document.getElementById('res')


    if (nome !== '' && altura !== '' && peso !== '') {

        var valorIMC = (peso / ((altura / 100) * (altura / 100))).toFixed(1)

        var classificacao = ''

        if (valorIMC < 17) {
            classificacao = 'muito Abaixo do peso'
        } else if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (valorIMC < 25) {
            classificacao = 'no Peso normal'
        } else if (valorIMC < 30) {
            classificacao = 'acima do peso'
        } else if (valorIMC < 35) {
            classificacao = 'com Obesidade grau I'
        } else if (valorIMC < 40) {
            classificacao = 'com Obesidade grau II'
        } else {
            classificacao = 'com Obesidade grau III'
        }
        
        res.innerHTML = `Olá, ${nome}, seu IMC é ${valorIMC} e você está ${classificacao}.`
    } else {
        res.innerText = 'Preencha todos os campos!!'
    }
} 