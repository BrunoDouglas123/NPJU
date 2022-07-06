let botaoIndex = document.getElementById('botaoIndex');


function voltarIndex(){
  if(botaoIndex){
    location.href = "t_home.html"
  }
}

function substituirDados() {
  document.getElementById('nome').value = localStorage.getItem('nome')
  document.getElementById('data').value = localStorage.getItem('data')
  document.getElementById('rg').value = localStorage.getItem('rg')
  document.getElementById('cpf').value = localStorage.getItem('cpf')
  document.getElementById('endereco').value = localStorage.getItem('endereco')
  document.getElementById('tel').value = localStorage.getItem('tel')
  document.getElementById('juiz').value = localStorage.getItem('juiz')
  document.getElementById('pcont').value = localStorage.getItem('pcont')
  document.getElementById('varajud').value = localStorage.getItem('varajud')
  document.getElementById('estcivil').value = localStorage.getItem('estcivil')

}
substituirDados()