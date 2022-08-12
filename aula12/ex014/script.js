function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
   var hora = data.getHours()
  // var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background =`#fed941`
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = `#7d7c75`
    } else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = `#232e4c`
    } 
}
    