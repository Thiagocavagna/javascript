let  res = document.getElementById('resposta')

let c = {a: document.getElementById('alcool'), g: document.getElementById('gasolina')}

function calcular() {
    let valor = c.a.value / c.g.value
    
    if (c.a.value == 0 || c.g.value == 0) {
        alert('Por favor, preencha todos os campos corretamente')
    } else if (valor < 0.7) {
        res.innerHTML = `<p>O resultado da divisão foi ${(valor*100).toFixed(2)}%. Hoje compensa abastecer com <strong>álcool</strong>.</p>`
    } else if (valor.toFixed(2) > 0.7) {
        res.innerHTML = `<p>O resultado da divisão foi ${(valor*100).toFixed(2)}%. Hoje compensa abaster com <strong>Gasolina</strong>.</p>`
    } else {
        res.innerHTML = `<p>O resultado da divisão foi ${(valor*100).toFixed(2)}%. Hoje os combustíveis estão com o mesmo custo benefício.</p>`
    }
}
