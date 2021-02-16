var n = document.getElementById('fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

funcition isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if(isNum(num.value) && !inList(num.value, valores)) {

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}