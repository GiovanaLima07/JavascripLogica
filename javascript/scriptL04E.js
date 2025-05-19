let i = 1;
let soma = 0;

alert("Digite 15 números:");

while (i <= 15) {
    let num = parseInt(prompt("Digite um número:"));
    let fatorial = 1;
    let fatorialIndividual = 1;

    while (fatorialIndividual <= num) {
        fatorial *= fatorialIndividual;
        fatorialIndividual++;
    }

    soma += fatorial;
    i++;
}

alert("A soma dos fatoriais é: " + soma);
