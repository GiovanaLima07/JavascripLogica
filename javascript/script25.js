function calcularSaldoConta() {
    let contaDoCliente, saldo, debito, credito, saldoAtual;

    alert("Digite o número da conta");
    contaDoCliente = prompt();

    alert("Digite o saldo");
    saldo = parseFloat(prompt());

    alert("Digite o valor do débito");
    debito = parseFloat(prompt());

    alert("Digite o valor do crédito");
    credito = parseFloat(prompt());

    saldoAtual = saldo - debito + credito;

    if (saldoAtual >= 0) {
        alert("Saldo positivo: R$" + saldoAtual.toFixed(2));
    } else {
        alert("Saldo negativo: R$" + saldoAtual.toFixed(2));
    }
}

calcularSaldoConta();
