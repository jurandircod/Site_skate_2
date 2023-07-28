window.addEventListener("DOMContentLoaded", function() { 

const bntEntrar = document.getElementById("bnt-entrar");
const bntCadastrar = document.getElementById("bnt-cadastrar");
const formLogin = document.getElementById("form-login");
const formCadastrar = document.getElementById("form-cadastrar");
const sun = document.getElementById("");


bntEntrar.addEventListener("click", function() {
    formLogin.style.display = "block";
    formCadastrar.style.display = "none";
  });
  

  bntCadastrar.addEventListener("click", function() {
    formLogin.style.display = "none";
    formCadastrar.style.display = "block";
    bntCadastrar.style.display = "none";
  });
 
});
