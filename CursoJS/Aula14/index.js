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
alunos.push('Paulo');
alunos.unshift('Vitor');

const removed = alunos.pop(); //remove o ultimo do array



console.log(alunos);