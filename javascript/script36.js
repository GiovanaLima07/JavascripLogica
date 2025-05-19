function calcularIdades() {
    let homem1, homem2, mulher1, mulher2;
    let homemMaisVelho, homemMaisNovo, mulherMaisVelha, mulherMaisNova;

    alert("Digite a idade de dois homens e duas mulheres.");
    homem1 = parseInt(prompt("Idade do primeiro homem: "));
    homem2 = parseInt(prompt("Idade do segundo homem precisar ser diferente do primeiro: "));
    mulher1 = parseInt(prompt("Idade da primeira mulher: "));
    mulher2 = parseInt(prompt("Idade da segunda mulher precisar ser diferente da primeira: "));

    if (homem1 > homem2) {
        homemMaisVelho = homem1;
        homemMaisNovo = homem2;
    } else {
        homemMaisVelho = homem2;
        homemMaisNovo = homem1;
    }

    if (mulher1 > mulher2) {
        mulherMaisVelha = mulher1;
        mulherMaisNova = mulher2;
    } else {
        mulherMaisVelha = mulher2;
        mulherMaisNova = mulher1;
    }

    alert("Idade do homem mais velho: " + homemMaisVelho + " mais mulher mais nova: " + mulherMaisNova + " é: " + (homemMaisVelho + mulherMaisNova));
    alert("Idade do homem mais novo: " + homemMaisNovo + " mais mulher mais velha: " + mulherMaisVelha + " é: " + (homemMaisNovo + mulherMaisVelha));
}

calcularIdades();
