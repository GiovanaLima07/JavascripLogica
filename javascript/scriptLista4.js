let numero, contador = 1, multiplicador;

alert("Tabuada");
numero = parseInt(prompt("Digite um número:"));

do {
    multiplicador = numero * contador;
    alert(numero + " X " + contador + " : " + multiplicador);
    contador = contador + 1;
} while (contador <= 10);
