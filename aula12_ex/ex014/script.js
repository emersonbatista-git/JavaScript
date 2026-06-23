

//Função para carregar um objeto e pegar a hora e data do computador
function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 14   forçar a hora para teste
msg.innerHTML = `Agora sao ${hora} horas.`


//Formatar as imagens para 250x250 para teste
if(hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
}else if(hora >= 12 && hora < 18){
    //BOA TARDE!
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
}else{
    //BOA NOITE!
    img.src = 'noite.jpg'
    document.body.style.background = '#515154'
}

}