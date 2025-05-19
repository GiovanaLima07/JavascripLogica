function calcularSalarioTotal() {
    let salarioFixo, valorVendas, comissao;

    alert("Qual o valor de seu salário fixo?");
    salarioFixo = parseFloat(prompt());

    alert("Qual foi o valor das vendas?");
    valorVendas = parseFloat(prompt());

    if (valorVendas > 1500) {
        comissao = valorVendas * 0.05;
    } else {
        comissao = valorVendas * 0.03;
    }

    alert("O salário total será de R$" + (comissao + salarioFixo).toFixed(2) + ", sendo R$" + comissao.toFixed(2) + " de comissão.");
}

calcularSalarioTotal();
