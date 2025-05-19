function calcularTotal() {
    let nomeProduto;
    let quantidade;
    let preco, total, desconto, totalPagar;

    nomeProduto = prompt("Digite nome do produto: ");
    quantidade = parseInt(prompt("Digite quantidade adquirida do produto: "));
    preco = parseFloat(prompt("Digite valor unitário: "));

    total = quantidade * preco;

    if (quantidade > 10) {
        desconto = total * 0.05;
    } else if (quantidade >= 5 && quantidade <= 10) {
        desconto = total * 0.03;
    } else {
        desconto = total * 0.02;
    }

    totalPagar = total - desconto;

    alert("O total a pagar será: " + totalPagar.toFixed(2));
}

calcularTotal();
