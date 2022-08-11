function verificar(){
   var data = new Date()
    var ano = data.getFullYear()
    var f = document.getElementById('txtano')
    var fano = Number(f.value)
    var res = document.querySelector('div#res')
  // document.write(` data:${data} ANO ${ano} fano ${fano} res ${res}`)
  if (fano == 0 || fano >= ano){
      document.write(`[ERRO] - digite valor correto`)
  } else if (fano < 12){
    document.write(`CRIANÇA`)
  } else if (fano < 50) {
    document.write(`JOVEM`)
  } else {
    document.write(`IDOSO`)
  }
}   
