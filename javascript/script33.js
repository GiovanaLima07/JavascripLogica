function compararNumeros() {
    let valor, valor2;

    alert("Digite um numero: ");
    valor = parseInt(prompt());

    alert("Digite mais um numero: ");
    valor2 = parseInt(prompt());

    if (valor > valor2) {
        alert(valor + " é maior que " + valor2);
    } else if (valor2 > valor) {
        alert(valor2 + " é maior que " + valor);
    } else {
        alert("Os numeros são iguais.");
    }
}

compararNumeros();
