// //SINTAXE HTTP REQUEST COM AJAX E JS PURO
// var REQxhttp = new XMLHttpRequest();
// REQxhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     //em caso de sucesso
//   }
// };
// REQxhttp.open('GET', 'http://...', true);
// REQxhttp.send();

// //SINTAXE HTTP REQUEST COM AJAX E JQUERY
// $.ajax({
//   url: 'https://...',
//   type: 'GET', //post, ...
//   beforeSend: function () {
//     $('#resultado').html('Carregando...');
//   },
// })
//   .done(function (result) {})

//   .fail(function (jqXHR, textStatus, msg) {
//     console.log('' + msg);
//   });

//EXEMPLO DE REQUISIÇÃO AJAX COM JQUERY
$('#lnk').click(function () {
  $.ajax({
    url: 'https://reqres.in/api/users',
    type: 'POST',
    headers: {
      'x-api-key': 'API KEY',
    },
    data: {
      name: 'Cristian',
      job: 'Fisioterapeuta',
      study: ['Fisioterapia(USP)', 'Pós em terapia manual(UniRitter)'],
    },
    beforeSend: function () {
      $('#resultado').html('Carregando...');
    },
  })
    //
    .done(function (msg) {
      //GUARDA OS VALORES DE STUDY E SEPARA
      var content = '';
      $.each(msg['study[]'], function (index, value) {
        content += value + ' - ';
      });
      $('#resultado').html(
        'Nome: ' +
          msg.name +
          '<br/>' +
          'Trabalho: ' +
          msg.job +
          '<br/>' +
          'Educação: ' +
          content +
          '<br/>' +
          'Id: ' +
          msg.id +
          '<br/>' +
          'Data de criação' +
          msg.createdAt
      );
    })
    .fail(function (jqXHR, textStatus, msg) {
      console.log('A requisição falhou e retornou a seguinte mensagem: ' + msg);
    });
});
