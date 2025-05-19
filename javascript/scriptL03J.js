let numero = 50;
let soma = 0;
let contador = 0;
let media;

while (numero <= 70) {
    if (numero % 2 === 0) {
        soma = soma + numero;
        contador = contador + 1;
    }
    numero = numero + 1;
}

media = soma / contador;

alert("Soma dos pares de 50 a 70: " + soma);
alert("Média dos pares: " + media);
