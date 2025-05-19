let nota1, nota2, nota3, nota4, media;

alert("Digite nota 1:");
nota1 = parseFloat(prompt());

alert("Digite nota 2:");
nota2 = parseFloat(prompt());

alert("Digite nota 3:");
nota3 = parseFloat(prompt());

alert("Digite nota 4:");
nota4 = parseFloat(prompt());

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
    alert("Parabéns, você passou de ano, com a média de " + media + ".");
} else {
    alert("Com sua média de " + media + " não será possível passar de ano.");
}
