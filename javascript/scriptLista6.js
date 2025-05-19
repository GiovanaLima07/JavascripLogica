let nota, soma = 0, contador = 0;
let media;

alert("Digite números entre 1 e 10");
alert("Para encerrar, digite um número inválido (negativo ou acima de 10)");

nota = parseInt(prompt("Digite uma nota:"));

do {
    if (nota >= 1 && nota <= 10) {
        soma = soma + nota;
        contador = contador + 1;
    }
    nota = parseInt(prompt("Digite uma nota:"));
} while (nota >= 1 && nota <= 10);

if (contador > 0) {
    media = soma / contador;
    alert("A média das notas válidas é: " + media);
} else {
    alert("Não é possível tirar média com os números digitados");
}
