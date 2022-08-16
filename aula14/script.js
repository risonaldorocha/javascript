
/*function contar (){

        var txti = window.document.querySelector(`input#txtinicio`)
        var ini = Number(txti.value)
        var txtf = window.document.querySelector(`input#txtfim`)
        var fim = Number(txtf.value)
        var txtp = window.document.querySelector(`input#txtpasso`)
        var passo= Number(txtpasso.value)
        var res = window.document.querySelector(`div#res`)
            while (ini < fim) {
                 res.innerHTML += `${ini}`
                 ini = ini + passo


            }
}*/
function contar () {
    let ini = document.getElementById(`txti`)
    let fim = document.getElementById(`txtf`)
    let passo = document.getElementById(`txtp`)
    let res = document.getElementById(`res`)
        if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            window.alert(`[ERRO] FALTA DADOS`)
        } else {
                res.innerHTML = `Contando:`
                    let i = Number(ini.value)
                    let f = Number(fim.value)
                    let p = Number(passo.value)
                    if (p <=  0){
                        window.alert(`Passo inválido! Considerando PASSO1`)
                        p
                         = 1
                    }
                    if ( i < f){
                         for (let c = i; c <= f; c += p){
                        res.innerHTML += `${c} \u{1F603}`
                         }            
             
                    } else {
                        for (c = i; c >= f; c -= p){
                            res.innerHTML += `${c} \u{1F449}`
                        }
                           
                    }
             res.innerHTML += `\u{1F3C1}`
             }
}        