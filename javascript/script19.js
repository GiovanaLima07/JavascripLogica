function compararValores() {
    let valor1, valor2;

    alert("Insira um numero");
    valor1 = parseInt(prompt());

    alert("Agora um valor diferente do primeiro inserido");
    valor2 = parseInt(prompt());

    if (valor1 > valor2) {
        alert("Valor " + valor1 + " é maior que " + valor2);
    } else {
        alert("Valor " + valor2 + " é maior que " + valor1);
    }
}

compararValores();
