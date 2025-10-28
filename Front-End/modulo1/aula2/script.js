var tipoVar = 'primeira declaração tipovar'; //ESCOPO GLOBAL
var condicional = 4;

if (condicional > 3) {
    var tipoVar = 'segunda declaração tipoVar, dentro do escopo do if';
}

console.log('Tipovar: ' + tipoVar);

let tipoLet = 'primeira declaração tipoLet'; //ESCOPO DE BLOCO
let condicionalLet = 4;

if (condicionalLet > 3) {
    let tipoLet = 'seguna declaração tipoLet, dentro do escopo do if'; //perceba que, caso não fosse escopo de bloco, isso acarretaria em um erro, pois let não pode ser redeclarada, apenas reatribuida.
}

console.log('tipoLet: ' + tipoLet);

const tipoConst = 'primeira declaração tipoConst'; //ESCOPO DE BLOCO
const condicionalConst = 4; // CONST NAO PODE SER REDECLARADO NEM REATRIBUIDO, OU SEJA, TEM VALOR FIXO EM TODO PROGRAMA APÓS A DECLARAÇÃO.

if (condicionalConst > 3) {
    const tipoConst = 'seguna declaração tipoConst, dentro do escopo do if';
}

console.log('tipoConst: ' + tipoConst);