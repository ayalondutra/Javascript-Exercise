var Mensagem = "Caneta azul";
var inputfield = document.getElementById("mensagemRol");
var intervalo_rolagem;

function comecar_Rolada(){
 intervalo_rolagem = setInterval(function(){
    Mensagem = Mensagem.substring(1) + Mensagem.substring(0, 1);
    inputfield.value = Mensagem;
 }, 500);
}

function parar_Rolada(){
 clearInterval(intervalo_rolagem);
}

