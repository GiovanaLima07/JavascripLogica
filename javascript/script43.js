function verificarTipoTriangulo() {
    let valorA, valorB, valorC;
    let qualTipo;

    valorA = parseInt(prompt("Digite o valor do lado A"));
    valorB = parseInt(prompt("Digite o valor do lado B"));
    valorC = parseInt(prompt("Digite o valor do lado C"));

    if ((valorA < valorB + valorC) && (valorB < valorA + valorC) && (valorC < valorA + valorB)) {
        if (valorA === valorB && valorB === valorC) {
            qualTipo = "Triângulo Equilátero";
            alert(qualTipo);
        } else if (valorA === valorB || valorB === valorC || valorA === valorC) {
            qualTipo = "Triângulo Isósceles";
        } else {
            qualTipo = "Triângulo Escaleno";
        }
    } else {
        qualTipo = "Não é possível formar um triângulo";
    }

    alert(qualTipo);
}

verificarTipoTriangulo();
