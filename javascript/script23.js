function calcularPesoIdeal() {
    let nome, sexo, altura, pesoIdeal;

    alert("Qual o seu nome?");
    nome = prompt();

    alert("Digite seu sexo (M para masculino, F para feminino):");
    sexo = prompt().toUpperCase();

    alert("Qual a sua altura?");
    altura = parseFloat(prompt());

    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    alert(nome + ", seu peso ideal é " + pesoIdeal.toFixed(2) + " kg");
}

calcularPesoIdeal();
