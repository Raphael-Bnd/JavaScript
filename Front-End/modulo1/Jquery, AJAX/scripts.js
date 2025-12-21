$(function () {
  $('#btn').on('click', function () {
    var cep = $('#cep').val();

    $.ajax({
      url: `https://brasilapi.com.br/api/cep/v2/${cep}`,
      type: 'GET',
    })
      .done(function (result) {
        console.log(JSON.stringify(result));
        $('#result').append(
          `CEP: ${result.cep} <br> Estado: ${result.state} <br> Cidade: ${result.city} <br> Rua: ${result.street} <br> Bairro: ${result.neighborhood}`
        );
      })
      .fail(function (xhr, txtStatus, msg) {
        console.log('Ocorreu um erro:' + msg);
      });
  });
});
