let termo1 = 1;
let termo2 = 1;
let i = 3;

alert(termo1);
alert(termo2);

while (i <= 15) {
    let termoAtual = termo1 + termo2;
    alert(termoAtual);

    termo1 = termo2;
    termo2 = termoAtual;

    i = i + 1;
}
