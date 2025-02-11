let marido = 'João';
let esposa = 'Maria';
let idade = 78;
let filho = 'Paulo';
let idadeFilho = 12;
let naoDefinido; // apenas declarar a variavel
naoDefinido = 20; // aplicando valor a variavel que foi declarada anteriormente

console.log('Olá mundo');
console.log(marido, 'nasceu em 2005.');
console.log('Em 2012',marido, 'conheceu', esposa);
console.log(esposa, 'teve 1 filho com', marido, 'em 2022.');
console.log('O filho de',marido, 'se chama', filho);
console.log('O', filho, 'tem', idadeFilho, 'anos.');
console.log(marido, 'faleceu aos', idade, 'anos.');
console.log(naoDefinido);

naoDefinido = 50; // variavel modificada(passa a ter esse valor)
console.log(naoDefinido);
