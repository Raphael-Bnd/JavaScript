/*
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

//PRECISO SAIR, TENHO DINHEIRO NO BOLSO E TEM SOL LÁ FORA(UTILIZO O AND(&&))
console.log(true && true);
//PRECISO SAIR, TENHO DINHEIRO NO BOLSO E TEM SOL LÁ FORA E PRECISO TER UMA ROUPA BONITA
// (UTILIZO O AND(&&) QUANTAS VEZES FOR NECESSARIO)
console.log(true && true && true);


const ExpressAnd = true && false && true;
console.log(ExpressAnd);

// PRECISO TER DINHEIRO NO BOLSO OU TER DINHEIRO OU TER ROUPA LAVADA;
// (SÓ RETORNA FALSE SE TODOS FOREM FALSE.)
const ExpressOr = true || false || true;
console.log(ExpressOr);

console.log(`\nVai logar?`);
const usuario = 'Arthur';
const senha = 'sucodeabacaxi';
//                      TRUE                  FALSE
const vaiLogar = usuario === 'Arthur' && senha === 'sucodemurangu';
console.log(vaiLogar);

console.log(!true);
console.log(!!true);