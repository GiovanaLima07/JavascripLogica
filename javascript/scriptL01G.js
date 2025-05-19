let A, B, C, D;
let soma1, soma2, soma3, soma4, soma5, soma6;
let mult1, mult2, mult3, mult4, mult5, mult6;

alert("Digite o valor de A:");
A = parseInt(prompt());

alert("Digite o valor de B:");
B = parseInt(prompt());

alert("Digite o valor de C:");
C = parseInt(prompt());

alert("Digite o valor de D:");
D = parseInt(prompt());

soma1 = A + B;
soma2 = A + C;
soma3 = A + D;
soma4 = B + C;
soma5 = B + D;
soma6 = C + D;

mult1 = A * B;
mult2 = A * C;
mult3 = A * D;
mult4 = B * C;
mult5 = B * D;
mult6 = C * D;

alert("Resultados das SOMAS:");
alert("A + B = " + soma1);
alert("A + C = " + soma2);
alert("A + D = " + soma3);
alert("B + C = " + soma4);
alert("B + D = " + soma5);
alert("C + D = " + soma6);

alert("Resultados das MULTIPLICAÇÕES:");
alert("A * B = " + mult1);
alert("A * C = " + mult2);
alert("A * D = " + mult3);
alert("B * C = " + mult4);
alert("B * D = " + mult5);
alert("C * D = " + mult6);
