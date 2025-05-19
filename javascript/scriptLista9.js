let numero = parseInt(prompt("Digite um número:"));
let fatorial = 1;
let contador = numero;

while (contador > 0) {
    fatorial = fatorial * contador;
    contador = contador - 1;
}

alert("O fatorial de " + numero + " é " + fatorial);
