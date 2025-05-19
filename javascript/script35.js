function calcularCombustivel() {
    let letra, combustivel, litrosCombustivel, desconto, valor;

    alert("Bem vindo ao nosso posto de combustivel.");
    alert("Que tipo de combustivel te apeteceria?");
    alert("Digite 'A' para álcool e 'G' para gasolina.");
    letra = prompt().toUpperCase();

    if (letra === "A") {
        combustivel = "Álcool";
        alert("Quantos litros de Álcool?");
        litrosCombustivel = parseInt(prompt());

        if (litrosCombustivel === 20) {
            desconto = (litrosCombustivel * 2.90) * 0.03;
            valor = (litrosCombustivel * 2.90) - desconto;
        } else if (litrosCombustivel > 20) {
            desconto = (litrosCombustivel * 2.90) * 0.04;
            valor = (litrosCombustivel * 2.90) - desconto;
        } else {
            valor = (litrosCombustivel * 2.90);
        }
        alert("Foi pago pelo cliente R$ " + valor + " em " + combustivel + ".");
    } else if (letra === "G") {
        combustivel = "Gasolina";
        alert("Quantos litros de Gasolina?");
        litrosCombustivel = parseInt(prompt());

        if (litrosCombustivel === 20) {
            desconto = (litrosCombustivel * 3.30) * 0.04;
            valor = (litrosCombustivel * 3.30) - desconto;
        } else if (litrosCombustivel > 20) {
            desconto = (litrosCombustivel * 3.30) * 0.06;
            valor = (litrosCombustivel * 3.30) - desconto;
        } else {
            valor = (litrosCombustivel * 3.30);
        }
        alert("Foi pago pelo cliente R$ " + valor + " em " + combustivel + ".");
    } else {
        alert("Digite a letra corretamente");
    }
}

calcularCombustivel();
