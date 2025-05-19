let avaliacao1, avaliacao2, nota;

avaliacao1 = parseInt(prompt("Insira a nota 1:"));
avaliacao2 = parseInt(prompt("Insira a nota 2:"));

nota = (avaliacao1 + avaliacao2) / 2;

if (nota >= 6) {
    alert("Aluno tirou nota " + nota + ", então foi aprovado.");
} else {
    alert("Aluno tirou nota " + nota + ", então não foi aprovado.");
}
