/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - VALORES COPIADOS
Rerefencia (mutavel) - array, object, function - VALORES QUE APONTAM PRO MESMO ESPAÇO DE MEMÓRIA
*/

let a = [1, 2, 3];
let b = a;
// let b = {...a}; | PARA B COPIAR O ARRAY DO A
console.log(a, b);

a.push(4);
console.log(a, b); // NOTE QUE O VALOR EM AMBOS É O MESMO.

let c = 12;
let d = c;
console.log(c, d);

c += 5;
console.log(c, d); // NOTE QUE O VALOR FOI COPIADO NA VARIAVEL MAS NÂO SE MANTEM O MESMO, PODE SER MUTAVEL

const i = {
    nome: 'Joao',
    idade: 25
};

// const n = i; AQUI OS DOIS APONTAM PARA O MESMO ESPAÇO NA MEMORIA
const n = {...i}; // AQUI UMA COPIA DE I É FEITA EM N.

i.nome = 'Paulo';
console.log(i)
console.log(n)