let botaoLogout = document.getElementById('botao-logout');
let inputBuscar = "";
let Maria = 'Maria';
let botaoCadastrarCliente = document.getElementById('second1');

//função para desligar
function logout(){
    if(botaoLogout){
        location.href = "index.html";
    }
}

//função para buscar com nome pré definido
function buscar(){
    inputBuscar = document.getElementById('campo').value;
    if(inputBuscar == Maria){
        location.href = "t_info.html";
    }
}

//função para ir para o cadastro de clientes
function cadastrarCliente(){
    if(botaoCadastrarCliente){
        location.href = "t_cadastrocliente.html";
    }
}

