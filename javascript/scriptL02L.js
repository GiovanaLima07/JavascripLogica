let nome, genero;

nome = prompt("Informe seu nome: ");
genero = prompt("Informe seu gênero, 'M' Masculino, 'F' Feminino: ");

if (genero === "M" || genero === "m") {
    alert("Ilmo Sr. " + nome);
} else {
    alert("Ilma Sra. " + nome);
}
