let senhaDigitada;
const senhaCorreta = 1234;

do {
    senhaDigitada = parseInt(prompt("Digite a senha:"));

    if (senhaDigitada !== senhaCorreta) {
        alert("Senha incorreta. Tente novamente.");
    }
} while (senhaDigitada !== senhaCorreta);

alert("Senha correta! Acesso permitido.");
