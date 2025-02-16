let num1 = 1;
let num2 = 2.5;
let num3 = 1500;
let num4 = 25.09012301;

console.log(num1.toString() + num2);
console.log();

console.log(typeof num1);
console.log();

num1 = num1.toString();
console.log(typeof num1);
console.log();

console.log(num3.toString(2));
console.log();

console.log(num4.toFixed(2));
console.log();

console.log(Number.isInteger(num3));
console.log();

let temp = num1 * 12;
console.log(Number.isNaN(temp));

console.log();
console.log('------------------------------------------');
console.log();

let nume1 = 0.7;
let nume2 = 0.1;


while (nume1 < 2.0) {
    nume1 += nume2;
};

nume1 = Number(nume1.toFixed(2)); // resolve

console.log(nume1);
console.log(Number.isInteger(nume1));

//#--------------------------------------------
// SEGUNDA MANEIRA DE RESOLVER O PROBLEMA DE IMPRECISÂO DOS NUMEROS FLUTUANTES:
console.log();
console.log('------------------------------------------');
console.log();

let numero1 = 0.7;
let numero2 = 0.1;

numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 0.8
numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 0.9
numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 1.0

console.log(numero1);
console.log(Number.isInteger(numero1));