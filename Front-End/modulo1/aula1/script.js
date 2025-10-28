console.log('I need a better GPU :');


//Alterar entre texto invisivel e visivel
function alterarTexto() {
    var linha = document.getElementById('line');
    var paragrafo = document.getElementById('palagrafo');
    paragrafo.classList.toggle('visivel');
    linha.classList.toggle('visivel');
}
var botao = document.getElementById('butano');
botao.onclick = alterarTexto;


//Outra maneira de alterar texto invisivel e visivel, mais complexa
// function escondeTexto() {
//     var escondePalagrafo = document.getElementById("palagrafo");
//     escondePalagrafo.style.display = "none";
// }
// var aparecePalagrafo = document.getElementById("butano");
// aparecePalagrafo.onclick = function () {
//     var paragrafo = document.getElementById('palagrafo');
//     var botao = document.getElementById('butano');
//     if (paragrafo.style.display === 'none') {
//         paragrafo.style.display = 'block';
//         botao.setAttribute('id', 'butano2');
//     } else {
//         paragrafo.style.display = 'none';
//         botao.setAttribute('id', 'butano');
//     }}


//FUNÇÕES JAVASCRIPT:
// function reiniciar() { //REINICIA A JANELA
//     window.location.reload(true);
// }

// ARROW FUNCTION:
const multiplica = (n1, n2) => {
    return n1 * n2;
}
console.log(multiplica(5, 5)); // Imprime o valor de 25!

//podemos simplificar ainda mais quando é apenas para retornar um valor.
const multiplica2 = (n1, n2) => n1 * n2;
console.log(multiplica2(3, 5));//Imprime o valor de 16

//-------------------
var cores = [
    { id: 1, nome: 'Amarelo' },
    { id: 2, nome: 'Verde' },
    { id: 3, nome: 'Azul' },
    { id: 4, nome: 'Branco' },
    { id: 5, nome: 'Preto' },
];
var nomesCores = [];
cores.forEach(function (cor) { //percorre cada cor em cores(em array, então começa pelo 0 e assim vai)
    nomesCores.push(cor.nome); //pega a cor.nome do array do valor 0 e coloca em nomesCores.
});
console.log(nomesCores);

const coresNomes = cores.map(cor => cor.nome); //Neste caso, o map percorre todo o array um por um e cria um novo em coresNomes
// (cor => cor.nome) significa: para cada cor, me devolva o nome dela)
console.log(coresNomes);
//-------------------

const alertaEx = (texto) => {
    alert(texto);
}
const alerta = (texto) => {
    alert(texto);
}

//TIPOS DE VARIAVEIS E ESCOPO:
// VARIAVEL VAR
var tipoVar = '1st decla';
var condic = 4;
console.log('1st tipoVar: ' + tipoVar);

if (condic > 3) {
    var tipoVar = '2nd decla'
}
console.log('2nd tipoVar: ' + tipoVar);

// VARIAVEL LET
let tipoLet = '1st declaLet';
let condicLet = 4;
console.log('1st tipoLet: ' + tipoLet);

if (condicLet > 3) {
    let tipoLet = '2nd declaLet';
    console.log('2nd tipoLet: ' + tipoLet);
}
//("tipoLet" não é alterada pela condicional condicLet, ou seja, o valor não é alterado fora da função.)
console.log('2nd tipoLet: ' + tipoLet);

var Variavel1 = 'valor inicial atribuido';
Variavel1 = 'Redeclarada';
var Variavel1 = 'valor re-atribuido'; // VAR PODE SER RE-ATRIBUIDO E REDECLARADO!

let Let1 = 'Valor inicial atribuido';
Let1 = 'Valor re-atribuido';
// let Let1 = 'Redeclarada'; // LET NÃO PODE SER RE-DECLARADO MAS PODE SER REATRIBUIDO!

const constante = 'Valor inicial atribuido';
// constante = 'Valor re-atribuido';
// const constante = 'Redeclarada'; // LET NÃO PODE SER RE-ATRIBUIDA NEM RE-DECLARADA!

// CHAMANDO AS FUNÇÕES:
alerta('Quero exibir isso!');
alertaEx('Após, exibo isto!');

// ALERTA AO CARREGAR A PAGINA:
window.onload = () => {
    alert('Página carregada com sucesso!');
}

// window.addEventListener('load', function (event) {
//     this.alert('Todos os recursos terminaram o carregamento!');
// })

