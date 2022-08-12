function verificar(){
   var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
      if (fano.value.length == 0 || Number(fano.value) > ano){
      document.alert(`[ERRO] - digite valor correto`)
      }  else {
       var fsex = document.getElementsByName(`radsex`)
       var idade = ano - Number(fano.value)
       var genero = ``
       var img = document.createElement(`img`)
       img.setAttribute(`id`, `foto`)
      if (fsex[0].checked){
      genero = 'HOMEM'
      if (idade >=0 && idade < 10){
        //criança
        img.setAttribute(`src`, 'crianca_homen.png')
      } else if (idade < 21){
        //jovem
        img.setAttribute(`src`, 'jovem_homen.png')
      } else if (idade < 50) {
        // adulto
        img.setAttribute(`src`, 'jovem_homen.png')
      } else {
        //idoso
        img.setAttribute(`src`, 'idoso_homen.jpg')
      }
    } else  if (fsex[1].checked) {
      genero = 'MULHER'
     }if (idade >=0 && idade < 10){
      //criança
      img.setAttribute(`src`, 'crianca_mulher.png')
     } else if (idade < 21){
       //jovem
       img.setAttribute(`src`, 'jovem_mulher.png')
    } else if (idade < 50) {
      // adulto
      img.setAttribute(`src`, 'jovem_mulher.png')
     } else {
      //idoso
      img.setAttribute(`src`, 'idoso_mulher.png')
      }
      res.style.textAlign = `center`
    res.innerHTML =`Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }

}   
