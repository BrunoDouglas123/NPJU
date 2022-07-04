let botaoHome = document.getElementById('botao-paraHome');
let botaoDeclaracao = document.getElementById('declaracao');



function voltaHome(){
        if(botaoHome){
            location.href = "t_home.html";
        }
    
}

function baixarDeclaracao(){
    if(botaoDeclaracao){
        location.href = "./img/DECLARAÇÃO-DE-POBREZA.pdf";
    }
}