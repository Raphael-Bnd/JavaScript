function main() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    let pessoas = [];

    function recvEventForm(event) {
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const aux = createPerson(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(aux);
        resultado.innerHTML += `<strong>${nome.value} <strong>`;
        resultado.innerHTML += `<strong>${sobrenome.value} <strong>`;
        resultado.innerHTML += `<strong>${peso.value} <strong>`;
        resultado.innerHTML += `<strong>${altura.value}<strong><br>`;
    }

    function createPerson(nome, sobrenome, peso, altura) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        };
    }
    form.addEventListener('submit', recvEventForm);
    console.log(pessoas);
}
main();
//form.onsubmit = function (event) {
//    event.preventDefault();
//    alert(1);
//    console.log('Teste')
//};