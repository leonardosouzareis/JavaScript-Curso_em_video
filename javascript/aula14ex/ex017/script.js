function tabuada() {
    let n = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (n.value.length == 0) {
        alert('[ERRO] Verifique se preencheu o campo corretamente.')
    } else {
        let c = 1
        let num = Number(n.value)
        tab.innerHTML = ``
        while (c <= 10) {        
            let item = document.createElement('option')    
            item.text = `${num} x ${c} = ${num * c}`
            tab.appendChild(item)
            c++
        }
    }
}