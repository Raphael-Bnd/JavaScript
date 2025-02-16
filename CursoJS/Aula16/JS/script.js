function createPerson(name, lastName, age) {
    return {
        name: name,
        lastName: lastName,
        age: age
    };
}

const pessoa6 = {
    nome: 'Joao',
    sobrenome: 'Willbert',
    idade: 34,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está com idade de ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    },
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();

/*
function createPerson(name, lastName, age){
    return {name, lastName, age};
}
*/

const pessoa1 = createPerson('Stevan', 'August', 66);
const pessoa2 = createPerson('Robert', 'Pattinson', 56);
const pessoa3 = createPerson('Lillia', 'Mare', 23);
const pessoa4 = createPerson('Arthur', 'Morgan', 33);
const pessoa5 = createPerson('John', 'Marston', 36);

console.log(pessoa1.name);
console.log(pessoa2.name);
console.log(pessoa3.name);
console.log(pessoa4.name);
console.log(pessoa4.lastName);
console.log(pessoa4.age);