let numSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas;

alert("Tente adivinhar um número de 1 a 10");
tentativas = parseInt(prompt("Digite sua tentativa:"));

do {
    if (tentativas !== numSecreto) {
        alert("Errado, tente novamente.");
        tentativas = parseInt(prompt("Digite sua tentativa:"));
    }
} while (tentativas !== numSecreto);

alert("Parabéns! Você acertou o número secreto: " + numSecreto);
