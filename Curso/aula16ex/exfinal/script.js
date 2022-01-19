var txtn = document.getElementById('txtn')
var sel = document.getElementById('sel')
//var n = Number(txtn.value)
var numero = []

function adicionar(){
    var n = Number(txtn.value)

    if (n < 1 || n > 100) {
        alert('Preencha um número válido!')
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        sel.appendChild(item)
        numero.push(n)
        numero.sort()
        var item2 = document.createElement('option')
        item2.text = `${numero}`
        sel.appendChild(item2)
       
    }
    
}

function finalizar(){

}

function limpar (){
    sel.innerHTML = ''
}

function testar(){
    alert(`Teste`)
}