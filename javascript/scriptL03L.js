let maior, menor;
let contador = 0;
let valor;

valor = parseInt(prompt("Digite um valor inteiro positivo (ou um valor negativo para sair): "));

while (valor >= 0) {
    if (contador === 0) {
        maior = valor;
        menor = valor;
    }

    if (valor > maior) {
        maior = valor;
    }

    if (valor < menor) {
        menor = valor;
    }

    contador++;

    valor = parseInt(prompt("Digite um valor inteiro positivo (ou um valor negativo para sair): "));
}

if (contador > 0) {
    alert("O maior valor informado foi: " + maior);
    alert("O menor valor informado foi: " + menor);
} else {
    alert("Nenhum valor válido foi informado.");
}
