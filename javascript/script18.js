function verificarIdadeParaVotacao() {
    let anoDeNascimento, anoAtual;

    alert("Em que ano estamos?");
    anoAtual = parseInt(prompt());

    alert("Em que ano nasceu?");
    anoDeNascimento = parseInt(prompt());

    if (anoAtual - anoDeNascimento >= 18) {
        alert("Já possui idade para votar");
    } else {
        alert("Não possui idade para votar");
    }
}

verificarIdadeParaVotacao();
