let i, numero;
let numeros = [];

for (i = 0; i < 4; i++) {
    numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número: "));
}

for (i = 0; i < 4; i++) {
    numero = numeros[i];
    if (numero % 2 === 0 || numero % 3 === 0) {
        document.write(numeros[i] + " ");
    }
}
