function verificarNumero() {
    let numero;

    alert("Digite um número: ");
    numero = parseInt(prompt());

    if (numero < 0) {
        alert(numero + " é negativo.");
    } else if (numero === 0) {
        alert("Número é 0");
    } else {
        alert(numero + " é positivo.");
    }
}

verificarNumero();
