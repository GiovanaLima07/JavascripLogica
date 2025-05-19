let trigo = 1;
let totalTrigo = 0;
let i = 1;

alert("Somatório de número de grãos de trigo no tabuleiro de xadrez");

while (i <= 64) {
    totalTrigo += trigo;
    trigo *= 2;
    i++;
}

alert("A quantidade total de trigo é: " + totalTrigo);
