const nome = 'João Vitor';
let idade = 30;
let peso = 84.0;
const altura = 1.80;
const imc = (peso / altura**2).toFixed(2);

console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', parseFloat(imc));