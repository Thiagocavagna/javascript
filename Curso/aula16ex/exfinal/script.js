var txtn = document.getElementById('txtn')
var sel = document.getElementById('sel')
//var n = Number(txtn.value)
var numero = []

//Function com parametros
function soma(n){
    let soma = 0

    for(c = 0; c < n.length; c++) {
        soma = soma + n[c] 
    }
    return soma
}

function media(n){
    let media = 0
    for(c = 0; c <n.length; c++) {
        media = soma(numero) / numero.length
    }
    return media
}

//Function sem parametros

function adicionar(){
    let n = Number(txtn.value)


    if (n < 1 || n > 100) {
        alert('Preencha um número válido!')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        sel.appendChild(item)
        numero.push(n)
        numero.sort()
 
    }
    
}


function finalizar(){
    let res = [document.getElementById('res1'), document.getElementById('res2'), document.getElementById('res3'), document.getElementById('res4'), document.getElementById('res5')]
    let min = Math.min(...numero)
    let max = Math.max(...numero)
   

    if (sel.length == 0) {
        alert('Adicione um número por favor.')
    } else {
        res[0].innerHTML = `Ao todo temos ${numero.length} números cadastrados.`
        res[1].innerHTML = `O maior valor informado foi ${max}.`
        res[2].innerHTML = `O menor valor informado foi ${min}.`
        res[3].innerHTML = `Somando todos os valores, temos ${soma(numero)}.`
        res[4].innerHTML = `A média dos valores digitados é ${media(numero)}.`
}
    
    
}

function limpar (){
    sel.innerHTML = ''
    res.innerHTML = ''
}



/*let soma = 0

    for(c = 0; c < numero.length; c++) {
        soma = soma + numero[c] 
    }
    */