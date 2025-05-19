let A, B, C;

alert("Digite o valor de A:");
A = parseInt(prompt());

alert("Digite o valor de B:");
B = parseInt(prompt());

alert("A: " + A + " B: " + B);

C = A;
A = B;
B = C;

alert("A: " + A + " B: " + B);
