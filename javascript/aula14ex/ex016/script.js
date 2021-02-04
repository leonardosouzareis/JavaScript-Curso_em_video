function contar() {
    let inicio = document.getElementById('numI')
    let fim = document.getElementById('numF')
    let passo = document.getElementById('passo')
    let res = document.getElementById('contagem')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Verifique se preencheu todos os campos!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('[ERRO] O passo não pode ser menor ou igual a 0 (zero). Iremos considerar passo igual a 1 (um).')
            p = 1
        }
        // Contagem crescente
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        // Contagem decrescente 
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    }
}