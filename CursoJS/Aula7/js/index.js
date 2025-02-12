let a = 'A';
let b = 'B';
let c = 'C';

const d = a;
a = b;
b = c;
c = d;

console.log(a, b, c);

[a, b, c] = [b, c, a]

console.log(a, b, c);