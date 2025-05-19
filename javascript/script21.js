function calcularDuracaoPartida() {
    let inicioHora, fimHora, duracao;

    alert("Em que hora sem minutos começou o jogo?");
    inicioHora = parseInt(prompt());

    alert("Em que horas sem minutos acabou a partida?");
    fimHora = parseInt(prompt());

    if (fimHora < inicioHora) {
        fimHora += 24;
    }

    duracao = fimHora - inicioHora;
    alert("Partida durou " + duracao + " horas");
}

calcularDuracaoPartida();
