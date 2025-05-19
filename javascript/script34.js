function testarResultados() {
    let valorX, valorY, valorZ, resposta;

    alert("Digite um valor para X: ");
    valorX = parseInt(prompt());

    alert("Digite um valor para Y: ");
    valorY = parseInt(prompt());

    valorZ = (valorX * valorY) + 5;

    if (valorZ <= 0) {
        resposta = "A";
    } else if (valorZ <= 100) {
        resposta = "B";
    } else {
        resposta = "C";
    }

    alert("Valor de z é: " + valorZ + " " + resposta);
}

testarResultados();
