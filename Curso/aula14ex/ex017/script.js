function tabuada() {
    var txtn = document.getElementById('txtn')
    var seltab = document.getElementById('seltab')

    if (txtn.value.length == 0) {
        alert('Por favor, preencha um número!')
        
    } else {
        var n = Number(txtn.value)
        seltab.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `seltab${c}`
            seltab.appendChild(item)
        }
    }
}