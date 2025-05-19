function ordenarValores() {
    let valor1, valor2;

    alert("Insira um numero");
    valor1 = parseInt(prompt());

    alert("Agora um valor diferente do primeiro inserido");
    valor2 = parseInt(prompt());

    if (valor1 < valor2) {
        alert(valor1 + " vem antes de " + valor2);
    } else {
        alert(valor2 + " vem antes de " + valor1);
    }
}

ordenarValores();
