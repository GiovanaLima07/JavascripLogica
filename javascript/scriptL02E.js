let varA, varB, varC;
let delta, x1, x2;

varA = parseFloat(prompt("Digite o valor de A:"));

if (varA === 0) {
    alert("O valor de A deve ser diferente de zero. Não é uma equação do segundo grau.");
} else {
    varB = parseFloat(prompt("Digite o valor de B:"));
    varC = parseFloat(prompt("Digite o valor de C:"));

    delta = (varB * varB) - (4 * varA * varC);

    if (delta < 0) {
        alert("Não existem raízes reais, pois o delta é negativo.");
    } else {
        x1 = (-varB + Math.sqrt(delta)) / (2 * varA);
        x2 = (-varB - Math.sqrt(delta)) / (2 * varA);
        alert("As raízes da equação são: " + x1 + " e " + x2);
    }
}
