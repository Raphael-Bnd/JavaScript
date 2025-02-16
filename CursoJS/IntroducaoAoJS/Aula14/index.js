const nome = 'Arthur';
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
console.log(alunos[1]);

alunos[0] = 'Leonardo';
alunos[3] = 'Danilo';

let aux = Number(alunos.length);
console.log(alunos.length);
alunos[aux] = 'Kaua';

/* aux = Number(alunos.length);
alunos[aux] = 'Roberto'; */

alunos[alunos.length] = 'Paçoca';
alunos.push('Paulo'); //Adiciona no final
alunos.unshift('Vitor'); // Adiciona no inicio

console.log(alunos);

const lastRm = alunos.pop(); //remove o ultimo do array
const firstRm = alunos.shift(); //remove o ultimo do array

delete alunos[1]; // deleta o item no local desejado, deixando vazio aquele local
console.log(alunos);
console.log(alunos[1]);

console.log(alunos.slice(0, 2));

console.log(typeof alunos);
console.log(alunos instanceof Array);