let numero;
let maior, menor;
let primeiroNumero = true;

alert("Digite um número positivo e inteiro (negativo para encerrar):");
numero = parseInt(prompt("Digite um número:"));

while (numero >= 0) {
    if (primeiroNumero) {
        maior = numero;
        menor = numero;
        primeiroNumero = false;
    } else {
        if (numero > maior) {
            maior = numero;
        }

        if (numero < menor) {
            menor = numero;
        }
    }

    alert("Digite outro número positivo e inteiro (negativo para encerrar):");
    numero = parseInt(prompt("Digite um número:"));
}

if (!primeiroNumero) {
    alert("Dos números digitados, " + maior + " é o maior e " + menor + " é o menor.");
} else {
    alert("Nenhum número positivo foi digitado.");
}
