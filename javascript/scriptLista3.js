let numero, soma = 0;

alert("Digite números positivos:");
alert("Para parar o somador, digite um número negativo");

do {
    numero = parseInt(prompt("Digite um número:"));
    if (numero > 0) {
        soma = soma + numero;
        alert(soma);
    }
} while (numero >= 0);
