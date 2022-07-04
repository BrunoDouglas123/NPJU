let botaoLogout = document.getElementById('botao-logout');
let inputBuscar = "";
let Maria = 'Maria';
let botaoCadastrarCliente = document.getElementById('second1');


function logout(){
    if(botaoLogout){
        location.href = "index.html";
    }
}


function buscar(){
    inputBuscar = document.getElementById('campo').value;
    if(inputBuscar == Maria){
        location.href = "t_info.html";
    }
}

function cadastrarCliente(){
    if(botaoCadastrarCliente){
        location.href = "t_cadastrocliente.html";
    }
}