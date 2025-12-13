// Alerta ao clicar no link
// $(function () {
//   $('.linkAmazon').on('click', function (event) {
//     //    event.preventDefault();
//     alert('Você está saindo do site da aula5');
//   });
// });

// Adiciona a classe 'projetado' ao passar o mouse e remove ao sair
$('.linkAmazon')
  .on('mouseover', function () {
    $(this).addClass('projetado');
  })
  .on('mouseout', function () {
    $(this).removeClass('projetado');
  });

// Redireciona com atraso e feedback ao usuário
$(document).ready(function () {
  $('.linkAmazon').on('click', function (e) {
    e.preventDefault();

    // Armazenar o botão clicado
    const $btn = $(this);

    // Desabilita o botão e mostrar feedback
    $btn.prop('disabled', true);
    $btn.text('Loading...');

    // Redireciona após um atraso
    setTimeout(function () {
      if (document.getElementById('Back')) {
        window.location.href = 'main.html';
      } else {
        window.location.href = 'index.html';
      }
    }, 300); // 300ms de atraso
  });
});
