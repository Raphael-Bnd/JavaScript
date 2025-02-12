const nome = 'João Vitor';
const sobrenome = 'Cardoso';
const anoAtual = new Date().getFullYear();
let idade = 30;
let peso = 84.0;
let anoNasc = anoAtual - idade;
let altura = 1.80;

const imc = (peso / altura ** 2).toFixed(2);

console.log(nome, 'nasceu em', anoNasc);
// console.log(`${nome} nasceu em ${anoNasc}`);
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
// console.log(nome + ' ' + sobrenome + ' tem '+ idade + ' anos, pesa ' + peso + ' kg');
console.log('tem', altura, 'de altura e seu IMC é de', parseFloat(imc));