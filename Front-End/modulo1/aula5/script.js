// $(function () {
//   $('.linkAmazon').on('click', function (event) {
//     //    event.preventDefault();
//     alert('Você está saindo do site da aula5');
//   });
// });

$('.linkAmazon')
  .on('mouseover', function () {
    $(this).addClass('projetado');
  })
  .on('mouseout', function () {
    $(this).removeClass('projetado');
  });
