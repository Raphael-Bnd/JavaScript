$('#req').on('click', function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://reqres.in/api/users?page=1',
    type: 'GET',
    dataType: 'json',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
    .done(function (result) {
      console.log(JSON.stringify(result));
    })
    .fail(function (xhr, txtStatus, msg) {
      console.log('Ocorreu um erro:' + msg);
    });
});
