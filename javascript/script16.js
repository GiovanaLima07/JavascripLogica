let maca, valor;

maca = parseInt(prompt("Quantas maçãs foram compradas?"));

if (maca > 11) {
    valor = 1.00;
    alert("O custo total da compra ficou: " + (maca * valor) + " R$");
} else {
    valor = 1.30;
    alert("O custo total da compra será: " + (maca * valor) + " R$");
}
