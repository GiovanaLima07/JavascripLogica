function verificarAposentadoria() {
    let ingressoEmpresa, anoNascimento, idade, tempoEmpresa;

    anoNascimento = parseInt(prompt("Em que ano nasceu? "));
    ingressoEmpresa = parseInt(prompt("Em que ano ingressou na empresa? "));

    idade = 2025 - anoNascimento;
    tempoEmpresa = 2025 - ingressoEmpresa;

    if (idade >= 65 || tempoEmpresa >= 30 || (idade >= 60 && tempoEmpresa >= 25)) {
        alert("Requer aposentadoria");
    } else {
        alert("Não requer aposentadoria");
    }
}

verificarAposentadoria();
