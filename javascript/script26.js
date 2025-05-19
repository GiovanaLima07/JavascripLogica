function gerenciarEstoque() {
    let quantidadeAtual, quantidadeMaxima, quantidadeMinima, quantidadeMedia;

    alert("Digite a quantidade de produtos no estoque");
    quantidadeAtual = parseInt(prompt());

    alert("Digite a quantidade máxima de produtos no estoque");
    quantidadeMaxima = parseInt(prompt());

    alert("Digite a quantidade mínima de produtos no estoque");
    quantidadeMinima = parseInt(prompt());

    quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

    if (quantidadeAtual >= quantidadeMedia) {
        alert("Não efetuar compra.");
    } else {
        alert("Efetuar compra.");
    }
}

gerenciarEstoque();
