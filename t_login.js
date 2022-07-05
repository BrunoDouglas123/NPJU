
let email = document.querySelector('#campoEmail');
let senha = document.querySelector('#campoSenha');
let labelSenha = document.querySelector('#labelSenha');
let labelEmail = document.querySelector('#labelEmail');
let botao = document.querySelector('#second2');
let olho = document.getElementById('verSenha');
let mensagem = document.getElementById('erro');
let iconeVerde1 = document.querySelector('.icone-verde1');
let iconeVermelho1 = document.querySelector('.icone-vermelho1');
let iconeTransparent1 = document.querySelector('.icone-transparent1');
let iconeVerde2 = document.querySelector('.icone-verde2');
let iconeVermelho2 = document.querySelector('.icone-vermelho2');
let iconeTransparent2 = document.querySelector('.icone-transparent2');


let validEmail = false;
let validSenha = false;


//verifica se os campos foram preenchidos, se sim: abre a páhina come, se não, da a mensagem de erro 
function login(){
  if(validEmail && validSenha){
    location.href = "t_home.html"
  } else { 
    mensagem.innerText = 'Preencha os campos';
  }
}


//Evento criado com addlistener para fazer senha aparecer e desaparecer

olho.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#campoSenha');

  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
})

//Validaçao do email

email.addEventListener('keyup',()=>{
  if(email.value.length === 0){
    labelEmail.setAttribute('style', 'color: white');
    labelEmail.innerHTML = 'Email';
    validEmail = false;
    mensagem.innerText = '';
    iconeVerde1.style.display= "none";
    iconeVermelho1.style.display="none";
    iconeTransparent1.style.display="flex";
  } else {
    if(validatorEmail(email.value) !== true){
      labelEmail.setAttribute('style', 'color: white');
      labelEmail.innerHTML = '*insira um email válido';
      iconeVermelho1.style.display="flex";
      validEmail = false;
     
      iconeVerde1.style.display= "none";
      iconeTransparent1.style.display="none";
    } else {
      labelEmail.setAttribute('style', 'color: white');
      labelEmail.innerHTML = 'Email válido';
      iconeVerde1.style.display= "flex";
      iconeVermelho1.style.display="none";
      iconeTransparent1.style.display="none";
      validEmail = true;
      mensagem.innerText = '';
    }
  }
})

function validatorEmail(email){
  let pegaEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return pegaEmail.test(email)
}

senha.addEventListener('keyup',()=>{
  
  if(senha.value.length === 0){
    labelSenha.setAttribute('style', 'color: white');
    labelSenha.innerHTML = 'Senha';
    validSenha = false;
    iconeVerde2.style.display= "none";
    iconeVermelho2.style.display="none";
    iconeTransparent2.style.display="flex";
  } else {
      if(senha.value.length >= 1 && senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: white');
        labelSenha.innerHTML = '*insira no mínimo 8 caracteres';
        validSenha = false;
        mensagem.innerText = '';
        iconeVerde2.style.display= "none";
        iconeVermelho2.style.display="flex";
        iconeTransparent2.style.display="none";
    }else{
      labelSenha.setAttribute('style', 'color: white');
      labelSenha.innerHTML ='Senha válida'
      validSenha = true; 
      mensagem.innerText = '';
      iconeVerde2.style.display= "flex";
      iconeVermelho2.style.display="none";
      iconeTransparent2.style.display="none";
    }
  }
})
