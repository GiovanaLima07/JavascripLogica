function verificarTriangulo() {
    let valorA, valorB, valorC;

    alert("Digite o valor do lado A: ");
    valorA = parseInt(prompt());

    alert("Digite o valor do lado B: ");
    valorB = parseInt(prompt());

    alert("Digite o valor do lado C: ");
    valorC = parseInt(prompt());

    if (valorA < valorB + valorC && valorB < valorA + valorC && valorC < valorA + valorB) {
        alert("Os valores formam um triângulo!");
    } else {
        alert("Os valores não formam um triângulo!");
    }
}

verificarTriangulo();
