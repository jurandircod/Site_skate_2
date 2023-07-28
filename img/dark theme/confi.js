// Obtendo a referência ao elemento HTML
const meuElemento = document.getElementById('cards');

// Adicionando o manipulador de eventos para o evento mouseover
meuElemento.addEventListener('mouseover', function() {
  this.style.height = '25rem';
});

// Adicionando o manipulador de eventos para o evento mouseout (quando o mouse sai do elemento)
meuElemento.addEventListener('mouseout', function() {
  this.style.backgroundColor = ''; // Restaurar a cor de fundo original
});