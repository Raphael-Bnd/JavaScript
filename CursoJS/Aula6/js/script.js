let num1 = prompt('Digite um número');
let num2 = prompt('Digite Outro número');
let soma = Number(num1) + Number(num2);
alert(`A soma dos seus dois números é de ${soma}`);
window.alert('Novo Alerta');

function confirmar() {
    const resposta = window.confirm('Deseja realmente excluir?');
    if (resposta == false) {
        return window.alert('Exclusão cancelada.');
    } else {
        const cidade = window.prompt('Digite sua Cidade.')
        if (cidade) {
            return window.alert(`Agora sabemos que sua cidade é ${cidade}`);
        }
    }
}

confirmar()