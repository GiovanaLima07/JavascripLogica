let numero;

alert("Contagem regressiva");
numero = parseInt(prompt("Digite um número:"));

do {
    numero = numero - 1;
    alert(numero);
} while (numero > 0);
