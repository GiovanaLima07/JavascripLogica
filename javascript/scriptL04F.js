let numerosDigitados;
let soma = 0;
let quantidadeNumeros = 0;
let media;

alert("Digite números, o primeiro não pode ser negativo:");
alert("Para encerrar digite um número negativo.");

numerosDigitados = parseInt(prompt("Digite um número:"));

while (numerosDigitados >= 0) {
    soma += numerosDigitados;
    quantidadeNumeros++;
    numerosDigitados = parseInt(prompt("Digite um número:"));
}

if (quantidadeNumeros > 0) {
    media = soma / quantidadeNumeros;
    alert("Foram digitados " + quantidadeNumeros + " números.");
    alert("A soma é: " + soma);
    alert("A média é: " + media);
} else {
    alert("Nenhum número válido foi digitado.");
}
