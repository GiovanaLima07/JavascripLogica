let base = parseInt(prompt("Digite o valor da base (B):"));
let expoente = parseInt(prompt("Digite o valor do expoente (E):"));
let resultado = 1;

for (let i = 1; i <= expoente; i++) {
    resultado *= base;
}

alert(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);
