const itens = $('.item-lista');

// Percorre todos os elementos da lista com a classe "item-lista"
for (let item = 0; item < itens.length; item++) {

    //Para cada elemento, imprime no console o seu conteúdo HTML
    console.log($('.item-lista').eq(item).html()); 
}

//Altera o conteúdo da div com id "div-one"
$('#div-one').html('Valor da div via Jquery.'); 

//Imprime no console o conteúdo da div com id "div-one"
console.log($('#div-one').html()); 

//Imprime no console o conteúdo do elemento "li" que não possui a classe "item-lista"
console.log($('li:not(.item-lista)').html()); 

//Adiciona um novo item no final da lista com id "container-lista"
$('#container-lista').append('<li>Quinto Item</li>'); 

//Adiciona um parágrafo após cada elemento "li"
$('li').after('<p>texto inserido após cada tag "Li"</p>'); 

//Adiciona um título antes da lista com id "container-lista"
$('#container-lista').before('<h3>Subtitulo da lista não ordenada</h3>'); 

//Remove o último parágrafo adicionado após os itens da lista
$('p').eq(-1).remove(); 

//Remove todos os itens da lista que possuem a classe "item-lista"
// $('li.item-lista').remove(); 

//Sobrescrevendo o conteúdo da primeira tag <p>
$( 'p' ).first().html("Esse texto sobrescreve o inicial.");

//Adicionando um novo conteúdo ao conteúdo já existente
//Foi utilizado o seletor first() para selecionar o primeiro elemento <p>
//$( 'p' ).first().append(" E esse texto é adicionado ao final do novo texto.");

//Uma outra forma de adicionar um novo conteúdo junto ao conteúdo já existente.
//Foi utilizado o seletor last() para selecionar o último elemento <p>
//$( 'p' ).last().html( $( 'p' ).last().html() + "Esse texto é adicionado ao final do texto existente." );
		
//Removendo o conteúdo da tag <span>
//Foi utilizado o seletor find() para localizar os elementos <span> dentro dos elementos <p>
//$( 'p' ).find('span').html('');