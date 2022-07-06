let botaoHome = document.getElementById('botao-paraHome');
let botaoDeclaracao = document.getElementById('declaracao');
let botaosalvar = document.getElementById('test')

var nome, data, rg, cpf, endereco, tel, juiz, pcont, varajud, estcivil


function voltaHome(){
        if(botaoHome){
            location.href ="t_home.html";
        }
    
}

function pegaDados(){
    localStorage.setItem('nome', document.cadastrocliente.nome.value)
    localStorage.setItem('data', document.cadastrocliente.data.value)
    localStorage.setItem('rg', document.cadastrocliente.rg.value)
    localStorage.setItem('cpf', document.cadastrocliente.cpf.value)
    localStorage.setItem('endereco', document.cadastrocliente.endereco.value)
    localStorage.setItem('tel', document.cadastrocliente.tel.value)
    localStorage.setItem('juiz', document.cadastrocliente.juiz.value)
    localStorage.setItem('pcont', document.cadastrocliente.pcont.value)
    localStorage.setItem('estcivil', document.cadastrocliente.estcivil.value)
    localStorage.setItem('varajud', document.cadastrocliente.varajud.value)
    nome = localStorage.getItem('nome')
    data = localStorage.getItem('data')
    rg = localStorage.getItem('rg')
    cpf = localStorage.getItem('cpf')
    endereco = localStorage.getItem('endereco')
    tel = localStorage.getItem('tel')
    juiz = localStorage.getItem('juiz')
    pcont = localStorage.getItem('pcont')
    estcivil = localStorage.getItem('estcivil')
    varajud = localStorage.getItem('varajud')
    }
    
   