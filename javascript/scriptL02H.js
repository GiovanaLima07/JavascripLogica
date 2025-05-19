let num1, num2, num3, num4, num5, maior, menor;

num1 = parseInt(prompt("Digite o primeiro número:"));
num2 = parseInt(prompt("Digite o segundo número:"));
num3 = parseInt(prompt("Digite o terceiro número:"));
num4 = parseInt(prompt("Digite o quarto número:"));
num5 = parseInt(prompt("Digite o quinto número:"));

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    maior = num1;
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    maior = num2;
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    maior = num3;
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    maior = num4;
} else {
    maior = num5;
}

if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
    menor = num1;
} else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
    menor = num2;
} else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
    menor = num3;
} else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
    menor = num4;
} else {
    menor = num5;
}

alert("O maior número é " + maior + " e o menor número é " + menor);
