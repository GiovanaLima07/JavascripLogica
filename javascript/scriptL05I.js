let termo1 = 1;
let termo2 = 1;
let termoAtual;
let i = 3;

alert(termo1);
alert(termo2);

for (i = 3; i <= 15; i++) {
    termoAtual = termo1 + termo2;
    alert(termoAtual);

    termo1 = termo2;
    termo2 = termoAtual;
}
