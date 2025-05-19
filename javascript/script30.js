function ordenarNumeros() {
    let valor, valor2, valor3, primeiro, segundo, terceiro;

    alert("Digite o primeiro número: ");
    valor = parseInt(prompt());

    alert("Digite o segundo número: ");
    valor2 = parseInt(prompt());

    alert("Digite o terceiro número: ");
    valor3 = parseInt(prompt());

    if (valor > valor2 && valor > valor3) {
        primeiro = valor;
        if (valor2 < valor3) {
            segundo = valor2;
            terceiro = valor3;
        } else {
            segundo = valor3;
            terceiro = valor2;
        }
    } else if (valor2 > valor && valor2 > valor3) {
        primeiro = valor2;
        if (valor > valor3) {
            segundo = valor;
            terceiro = valor3;
        } else {
            segundo = valor3;
            terceiro = valor;
        }
    } else {
        primeiro = valor3;
        if (valor > valor2) {
            segundo = valor;
            terceiro = valor2;
        } else {
            segundo = valor2;
            terceiro = valor;
        }
    }

    alert("Ordem crescente: " + primeiro + ", " + segundo + ", " + terceiro);
}

ordenarNumeros();
