function calcular() {
    let genero = document.getElementById('genero')
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let idade = document.getElementById('idade')
    let objetivo = document.getElementById('objetivo')
    let at = document.getElementById('atividade')
    let atividade = Number(at.value)
    let res = document.getElementById('res')

    let basal = {homem: (9.99 * peso.value) + (6.25 * altura.value) - (4.92* idade.value) + 5, mulher:(9.99 * peso.value) + (6.25 * altura.value) - (4.92* idade.value) - 161}
    let diario = {fem: basal.mulher * atividade, masc: basal.homem * atividade}

    
    


    if (genero == 0 || peso.value == 0 || altura.value == 0 || idade.value == 0 || objetivo == 0 || atividade == 0) {
        alert('Por favor, preencha todos os campos!')
    } else if (genero.value == 'mulher') {
        res.innerHTML = `O seu gasto basal diário é de <strong>${basal.mulher.toFixed(0)}</strong> kcal.`
        if (objetivo.value == 'emagrecer-rapido') {
            res.innerHTML += `<p>Para emagrecer rapidamente, você precisa consumir <strong>${(diario.fem * 0.80).toFixed(0)}</strong> kcal por dia.</p>`
        } else if (objetivo.value == 'emagrecer') {
            res.innerHTML += `<p>Para emagrecer rapidamente, você precisa consumir <strong>${(diario.fem * 0.90).toFixed(0)}</strong> kcal por dia.</p>`
        } else if (objetivo.value == 'manter') {
            res.innerHTML += `<p>Para manter o seu peso atual, você precisa consumir <strong>${diario.fem.toFixed(0)}</strong> kcal por dia.</p>`
        } else if (objetivo.value == 'ganhar') {
            res.innerHTML += `<p>Para ganhar peso, você precisa consumir <strong>${(diario.fem * 1.1).toFixed(0)}</strong> kcal por dia.`
        } else {
            res.innerHTML += `<p>Para ganhar peso rapidamente, você precisa consumir <strong>${(diario.fem * 1.2).toFixed(0)}</strong> kcal por dia.`
        }
    } else {
            res.innerHTML = `O seu gasto basal diário é de <strong>${basal.homem.toFixed(0)}</strong> kcal.`
            if (objetivo.value == 'emagrecer-rapido') {
                res.innerHTML += `<p>Para emagrecer rapidamente, você precisa consumir <strong>${(diario.masc * 0.80).toFixed(0)}</strong> kcal por dia.</p>`
            } else if (objetivo.value == 'emagrecer') {
                res.innerHTML += `<p>Para emagrecer, você precisa consumir <strong>${(diario.masc * 0.90).toFixed(0)}</strong> kcal por dia.</p>`
            } else if (objetivo.value == 'manter') {
                res.innerHTML += `<p>Para manter o seu peso atual, você precisa consumir <strong>${diario.masc.toFixed(0)}</strong> kcal por dia.</p>`
            } else if (objetivo.value == 'ganhar') {
                res.innerHTML += `<p>Para ganhar peso, você precisa consumir <strong>${(diario.masc * 1.1).toFixed(0)} </strong>kcal por dia.`
            } else {
                res.innerHTML += `<p>Para ganhar peso rapidamente, você precisa consumir <strong>${(diario.masc * 1.2).toFixed(0)}</strong> kcal por dia.`
            }
        } 
    } 


/*function calcular() {
    let genero = document.getElementById('genero')
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let idade = document.getElementById('idade')
    let objetivo = document.getElementById('objetivo')
    let at = document.getElementById('atividade')
    let atividade = Number(at.value)
    let res = document.getElementById('res')

    let mulher = (9.56 * peso.value) + (1.85 * altura.value) - (4.68* idade.value) + 665
    let homem = (13.75 * peso.value) + (5 * altura.value) - (6.76 * idade.value) + 66.5
    let diario = [mulher * atividade, homem * atividade]


    if (genero == 0 || peso.value == 0 || altura.value == 0 || idade.value == 0 || objetivo == 0 || atividade == 0) {
        alert('Por favor, preencha todos os campos!')
    } else if (genero.value == 'mulher') {
        res.innerHTML = `O seu gasto basal diário é de ${mulher.toFixed(2)} kcal.`
        if (objetivo.value == 'emagrecer') {
            res.innerHTML += `<p>Para emagrecer, você precisa consumir ${(diario[0] * 0.85).toFixed(2)} kcal por dia.</p>`
        } else if (objetivo.value == 'manter') {
            res.innerHTML += `<p>Para manter o seu peso atual, você precisa consumir ${diario[0].toFixed(2)} kcal por dia.</p>`
        } else {
            res.innerHTML += `<p>Para ganhar peso, você precisa consumir ${(diario[0] * 1.2).toFixed(2)}`
        }
        } else {
            res.innerHTML = `O seu gasto basal diário é de ${homem.toFixed(2)} kcal.`
            if (objetivo.value == 'emagrecer') {
                res.innerHTML += `<p>Para emagrecer, você precisa consumir ${(diario[1] * 0.85).toFixed(2)} kcal por dia.</p>`
            } else if (objetivo.value == 'manter') {
                res.innerHTML += `<p>Para manter o seu peso atual, você precisa consumir ${diario[1].toFixed(2)} kcal por dia.</p>`
            } else {
                res.innerHTML += `<p>Para ganhar peso, você precisa consumir ${(diario[1] * 1.2).toFixed(2)}`
            }
        } 
    } 

    //let mulher = (9.56 * peso.value) + (1.85 * altura.value) - (4.68* idade.value) + 665
    //let homem = (13.75 * peso.value) + (5 * altura.value) - (6.76 * idade.value) + 66.5
        */