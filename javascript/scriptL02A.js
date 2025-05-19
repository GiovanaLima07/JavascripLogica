let numUm, numDois, resultado;

alert("Digite dois números diferentes");

alert("Digite o 1° número:");
numUm = parseInt(prompt());

alert("Digite o 2° número:");
numDois = parseInt(prompt());

if (numUm > numDois) {
    resultado = numUm - numDois;
    alert("A diferença de " + numUm + " para " + numDois + " é " + resultado);
} else {
    resultado = numDois - numUm;
    alert("A diferença de " + numDois + " para " + numUm + " é " + resultado);
}
