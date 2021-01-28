function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>0 && hora<12) {
        // Bom dia!
        img.src = 'edited-manha.png'
        document.body.style.background = '#5a9ec3'
    } else if (hora>=12 && hora<18) {
        // Boa tarde!
        img.src = 'edited-tarde.png'
        document.body.style.background = '#feab1e'
    } else {
        // Boa noite
        img.src = 'edited-noite.png'
        document.body.style.background = '#1b373f'
    }
}
