function somarDoisMaiores() {
    let valor, valor2, valor3, maior, maior2, soma;

    alert("Digite o primeiro número: ");
    valor = parseInt(prompt());

    alert("Digite o segundo número: ");
    valor2 = parseInt(prompt());

    alert("Digite o terceiro número: ");
    valor3 = parseInt(prompt());

    // Determina os dois maiores números
    if (valor > valor2 && valor > valor3) {
        maior = valor;
        maior2 = valor2 > valor3 ? valor2 : valor3;
    } else if (valor2 > valor && valor2 > valor3) {
        maior = valor2;
        maior2 = valor > valor3 ? valor : valor3;
    } else {
        maior = valor3;
        maior2 = valor > valor2 ? valor : valor2;
    }

    soma = maior + maior2;
    alert("A soma dos dois maiores números é: " + soma);
}

somarDoisMaiores();
