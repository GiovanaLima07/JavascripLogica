function verificarMaiorValor() {
    let valor1, valor2, valor3;

    alert("Digite um número: ");
    valor1 = parseInt(prompt());

    alert("Digite outro número diferente do primeiro:");
    valor2 = parseInt(prompt());

    alert("Digite mais um número diferente do primeiro e do segundo.");
    valor3 = parseInt(prompt());

    if (valor1 > valor2 && valor1 > valor3) {
        alert(valor1 + " é o maior entre os números digitados.");
    } else if (valor2 > valor1 && valor2 > valor3) {
        alert(valor2 + " é o maior entre os números digitados.");
    } else {
        alert(valor3 + " é o maior entre os números digitados.");
    }
}

verificarMaiorValor();
