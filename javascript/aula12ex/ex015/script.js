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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade>0 && idade<16) {
                // Criança
                img.setAttribute('src', 'fotos/bebe-o.png')
            } else if (idade <23) {
                // Jovem
                img.setAttribute('src', 'fotos/jovem-o.png')
            } else if (idade<51) {
                // Adulto
                img.setAttribute('src', 'fotos/adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotos/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade>0 && idade<16) {
                // Criança
                img.setAttribute('src', 'fotos/bebe-a.png')
            } else if (idade <23) {
                // Jovem
                img.setAttribute('src', 'fotos/jovem-a.png')
            } else if (idade<51) {
                // Adulto
                img.setAttribute('src', 'fotos/adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotos/idosa.png')
            }
        }
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}