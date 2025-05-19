function verificarAcesso() {
    let usuario, senha;

    usuario = parseInt(prompt("Digite o número de usuário:"));

    if (usuario === 1234) {
        senha = parseInt(prompt("Digite o número de senha:"));
        if (senha === 9999) {
            alert("Acesso permitido.");
        } else {
            alert("Senha incorreta.");
        }
    } else {
        alert("Usuário inválido!");
    }
}

verificarAcesso();
