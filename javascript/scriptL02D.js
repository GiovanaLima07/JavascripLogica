let nota1, nota2, nota3, nota4, media, exame;

alert("Digite nota 1:");
nota1 = parseFloat(prompt());

alert("Digite nota 2:");
nota2 = parseFloat(prompt());

alert("Digite nota 3:");
nota3 = parseFloat(prompt());

alert("Digite nota 4:");
nota4 = parseFloat(prompt());

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    alert("Parabéns, você passou de ano, com a média de " + media + ".");
} else {
    alert("Sua média foi abaixo do esperado, solicitamos a nota de exame:");
    exame = parseFloat(prompt());

    media = (media + exame) / 2;

    if (media >= 5) {
        alert("Aprovado em exame com a média de " + media);
    } else {
        alert("Reprovado, média: " + media);
    }
}
