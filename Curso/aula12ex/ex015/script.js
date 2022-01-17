function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (Fano.value.length == 0 || Fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >= 0 && idade <10) {
               img.setAttribute('src', 'bebe-homem.png')
           } else if (idade >= 10 && idade <21) {
               img.setAttribute('src', 'jovem-homem.png')
           } else if (idade < 50) {
               img.setAttribute('src', 'adulto-homem.png')
           } else  {
               img.setAttribute('src', 'idoso-homem.png')
           }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'bebe-mulher.png')
            } else if (idade >= 10 && idade <21) {
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.png')
            } else  {
                img.setAttribute('src', 'idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        }
}