//Alerta ao carregar a página usando JavaScript puro
// window.onload = function () {
//     alert('Evento disparado ao final do carregamento da página!');
// };

//Alerta ao carregar a página usando jQuery
// $(function () {
//   alert('Evento disparado com Jquery ao final do carregamento da página!');
// });

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

$('#botao-inicial').hover(
  function () {
    $(this).addClass('projetado');
  },
  function () {
    $(this).removeClass('projetado');
  }
);

$('#botao-inicial').on('click', function () {
  $(this).toggleClass('active');
});
