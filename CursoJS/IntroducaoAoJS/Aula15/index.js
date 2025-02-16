hello('John');
console.log(soma(6, 12));
console.log(soma(24, 90));
console.log(multi(5, 3));
console.log(subtra(10, 5));
console.log(divi(10, 2));
console.log(raiz(16));
console.log(divi(10, 0));

function hello(name) {
    console.log(`Hello ${name}, nice to meet you!`);
}

function subtra(x = 0, y = 0) {
    return x - y;
}

function soma(x = 0, y = 0) {
    return x + y;
}

function multi(x = 0, y = 0) {
    return x * y;
}

function divi(x, y) {
    if (y == 0) {
        return console.log('Impossivel de dividir por zero.');
    }
    return x / y;
}

function raiz(x) { // DEFAULT FUNCTION
    return x ** 0.5;
}

const raiz = function(n) { //VAR FUNCTION
    return n ** -0.5;
};

const raiz2 = (n) => n ** -0.5; // ARROW FUNCTION