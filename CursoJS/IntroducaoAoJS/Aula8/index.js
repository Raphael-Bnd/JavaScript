//           012345678
let texto = 'Um "texto"';
let texto2 = 'O rato roeu a roupa do rei de roma.';
let nome = 'Raphael de Almeida Pinto Bandeira.';

console.log(texto[4]);
console.log(texto.charAt(6));

console.log(texto.indexOf('texto'));

console.log(texto.replace('Um', 'Outro'));
console.log(texto2.replace(/r/g, '#'));

console.log(texto.concat(' em um lindo dia.'));
console.log(texto + ' em um lindo dia.');
console.log(`${texto} em um lindo dia.`);

console.log(texto2.length);
console.log(texto2.slice(2, 6));

console.log(texto2.slice(-5, -1));
console.log(texto2.substring(texto2.length - 5, texto2.length - 1));

console.log(texto2.split(' '));
console.log(nome.split(' ', 2,));

console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

function getLastName(x) {
    let nomeComplete = x;
    let nameArray = nomeComplete.split(' ');
    return nameArray[nameArray.length - 1];
};

function getFirsName(x) {
    let nomeComplete = x;
    let nameArray = nomeComplete.split(' ')
    return nameArray[0]
};

nome = getFirsName(nome) + ' ' + getLastName(nome);

console.log(nome);