alert('Hello World!');
window.alert('Novo Alerta');

function confirmar() {
    const resposta = window.confirm('Deseja realmente excluir?');
    if (resposta == false) {
        return window.alert('Exclusão cancelada.');
    } else {
        const cidade = window.prompt('Digite sua Cidade.')
        if (cidade) {
            return window.alert(`Se fudeu seu burro kkkkk agora eu sei que a tua cidade é ${cidade} kkkkk`);
        }
    }
}

confirmar()