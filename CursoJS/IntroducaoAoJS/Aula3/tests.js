let marido = 'João';
let esposa = 'Maria';
let idadeMarido = 78;
let filho = 'Paulo';
let idadeFilho = 12;
let naoDefinido; // apenas declarar a variavel
naoDefinido = 20; // aplicando valor a variavel que foi declarada anteriormente

console.log('Olá mundo');
console.log(marido, 'nasceu em 2005.');
console.log('Em 2012', marido, 'conheceu', esposa);
console.log(esposa, 'teve 1 filho com', marido, 'em 2022.');
console.log('O filho de', marido, 'se chama', filho);
console.log('O', filho, 'tem', idadeFilho, 'anos.');
console.log(marido, 'faleceu aos', idadeMarido, 'anos.');
console.log(naoDefinido);

naoDefinido = 50; // variavel modificada(passa a ter esse valor) DEFINIDA NA LINHA 6
console.log(naoDefinido);

let nomeCliente = 'Otavio'; // JS é Case-sensitive
let nomecliente = 'Miranda';

console.log(nomeCliente, nomecliente);

const nomea = 'Arthur'; // Não pode ser declarada, ela precisa ter valor.
console.log(nomea); // não pode ser modificada ao decorrer do código.

const firstNum = 5;
console.log(firstNum);

const secondNum = 10;
console.log(secondNum);
console.log();

const soma = firstNum + secondNum;
console.log(soma);

let resultadoTriplicado = soma * 3;
console.log(resultadoTriplicado);

resultadoTriplicado += 5;
console.log(resultadoTriplicado);


console.log(typeof resultadoTriplicado);
console.log(typeof marido);

const cincoString = '5';
const cincoNumber = 5;
const soma2 = cincoNumber + cincoString;
console.log(soma2);
console.log(typeof soma2);