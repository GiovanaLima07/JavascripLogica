let base = parseInt(prompt("Informe o valor da base (base): "));
let expoente = parseInt(prompt("Informe o valor do expoente (expoente): "));

let resultado = 1;
let i = 1;

while (i <= expoente) {
    resultado = resultado * base;
    i = i + 1;
}

alert(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);
