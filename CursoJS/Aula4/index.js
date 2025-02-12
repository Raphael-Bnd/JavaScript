var nome = 'João';
var nome = 'Vitor';
nome = 'luiz'; // Não fazer isso (isso cria var global).
let nick = 'rodrigo';
nick = 'augusto';
// let nick = 'augusto'; (não se pode reatribuir uma var let, dá erro.)

console.log(nome);
console.log(nick);

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

let z = 4;
const x = z;
console.log(z, x);

z = 9;
console.log(z, x);