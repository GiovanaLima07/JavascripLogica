let soma = 0;
let contador = 1;
let media;

while (contador <= 10) {
    let valor = parseInt(prompt("Digite o " + contador + "º valor: "));
    soma = soma + valor;
    contador = contador + 1;
}

media = soma / 10;

alert("Somatório: " + soma);
alert("Média: " + media);
