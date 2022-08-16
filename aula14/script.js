
function contando (){

var txti = window.document.querySelector(`input#txtinicio`)
var ini = Number(txti.value)
var txtf = window.document.querySelector(`input#txtfim`)
var fim = Number(txtf.value)
var txtp = window.document.querySelector(`input#txtpasso`)
var passo= Number(txtpasso.value)
var res = wind.document.querySelector(`div#res`)
while (ini < fim) {
    res.innerHTML = `${ini}`
    ini = ini + passo


}

}