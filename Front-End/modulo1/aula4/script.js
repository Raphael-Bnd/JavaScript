//Alerta ao carregar a página usando JavaScript puro
// window.onload = function () {
//     alert('Evento disparado ao final do carregamento da página!');
// };

// Alerta ao carregar a página usando jQuery
$(function () {
  alert('Evento disparado com Jquery ao final do carregamento da página!');
});

// Adiciona ou remove o parágrafo ao clicar no botão
$('#botao-inicial').on('click', function () {
  if ($('#texto-scnd').length) {
    $('#texto-scnd').slideUp(300, function () {
      $(this).remove();
    });
  } else {
    var novoParagrafo = $(
      '<p id="texto-scnd" class="texto">Paragrafo que foi adicionado ao clicar no botão com Jquery.</p>'
    );
    $('.parent').append(novoParagrafo);
    novoParagrafo.hide().slideDown(500);
  }
});

// Adiciona efeito de "projetar" o botão ao passar o mouse sobre ele
$('#botao-inicial').hover(
  function () {
    $(this).addClass('projetado');
  },
  function () {
    $(this).removeClass('projetado');
  }
);

// Adiciona efeito de "clique" ao botão
$('#botao-inicial').on('click', function () {
  $(this).toggleClass('active');
});

// Alerta ao pressionar qualquer tecla no corpo da página
$('body').keypress(function (event) {
  event.preventDefault();
  alert('Tecla pressionada: ' + String.fromCharCode(event.which));
});
