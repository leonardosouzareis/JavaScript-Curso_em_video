function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano') // f == Formulário
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value>ano) {
        alert('[ERRO] Verifique o ano de nascimento.')
    } else {
        var fSex = document.getElementsByName('radsex') // f == Formulário
        var idade = ano - Number(fAno.value)
        var genero = ''

        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade>0 && idade<11) {
                // Criança
            } else if (idade <25) {
                // Jovem
            } else if (idade<51) {
                // Adulto
            } else {
                // Idoso
            }
        } else {
            genero = 'Mulher'
            if (idade>0 && idade<11) {
                // Criança
            } else if (idade <25) {
                // Jovem
            } else if (idade<51) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.innerHTML = `${genero} com ${idade} anos.`
    }
}