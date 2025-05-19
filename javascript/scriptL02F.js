let a, b, c, temp;

a = parseFloat(prompt("Digite o valor de A: "));
b = parseFloat(prompt("Digite o valor de B: "));
c = parseFloat(prompt("Digite o valor de C: "));

if (a > b) {
    temp = a;
    a = b;
    b = temp;
}

if (a > c) {
    temp = a;
    a = c;
    c = temp;
}

if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

alert("Os valores em ordem crescente são: " + a + ", " + b + ", " + c);
