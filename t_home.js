let botaoLogout = document.getElementById('botao-logout');
let inputBuscar = "";
let Maria = 'Maria';
let botaoCadastrarCliente = document.getElementById('second1');
let botaoEsconder = document.getElementById('esconder-mostrar');
let divEsconder = document.querySelector('.sites');

//função para desligar
function logout(){
    if(botaoLogout){
        location.href = "index.html";
    }
}

//função para buscar com nome pré definido
function buscar(){
    inputBuscar = document.getElementById('campo').value;
    if(inputBuscar == localStorage.getItem('nome')){
        location.href = "t_info.html";
    }
}

//função para ir para o cadastro de clientes
function cadastrarCliente(){
    if(botaoCadastrarCliente){
        location.href = "t_cadastrocliente.html";
    }
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#botao-buscar");
      
      btn.click();
    }
  });

  botaoEsconder.addEventListener('click', function(){

    if(divEsconder.style.display === 'flex'){
        divEsconder.style.display = 'none';
    } else {
        divEsconder.style.display = 'flex';
    }

  })
