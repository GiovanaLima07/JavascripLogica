function calcularMedia() {
    let n1, n2, n3, mediaExercicios;
    let mediaAproveitamento;
    let conceito;

    n1 = parseInt(prompt("Digite a primeira nota: "));
    n2 = parseInt(prompt("Digite a segunda nota: "));
    n3 = parseInt(prompt("Digite a terceira nota: "));
    mediaExercicios = parseFloat(prompt("Digite a média de exercícios: "));

    mediaAproveitamento = (n1 + (n2 * 2) + (n3 * 3) + mediaExercicios) / 7;

    if (mediaAproveitamento >= 9) {
        conceito = "A";
    } else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
        conceito = "B";
    } else if (mediaAproveitamento >= 6.5 && mediaAproveitamento < 7.5) {
        conceito = "C";
    } else {
        conceito = "D";
    }

    alert("Sua média de aprovação é " + mediaAproveitamento.toFixed(2) + " " + conceito);
}

calcularMedia();
