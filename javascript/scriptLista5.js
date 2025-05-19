let comeco = parseInt(prompt("Digite um número de início:"));
let final = parseInt(prompt("Digite um número para o fim:"));

if (comeco % 2 !== 0) {
    comeco = comeco + 1;
}

do {
    alert(comeco);
    comeco = comeco + 2;
} while (comeco <= final);
