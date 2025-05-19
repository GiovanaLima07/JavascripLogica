function declararCampeao() {
    let time1, time2, golsTime1, golsTime2;

    alert("Digite o nome do time que está jogando: ");
    time1 = prompt();

    alert("Digite o nome do outro time");
    time2 = prompt();

    alert("Quantos gols foram marcados pelo primeiro time?");
    golsTime1 = parseInt(prompt());

    alert("Quantos gols foram marcados pelo segundo time?");
    golsTime2 = parseInt(prompt());

    if (golsTime1 > golsTime2) {
        alert(time1 + " é o campeão com " + golsTime1 + " gol(s)");
    } else if (golsTime2 > golsTime1) {
        alert(time2 + " é o campeão com " + golsTime2 + " gol(s)");
    } else {
        alert("EMPATE");
    }
}

declararCampeao();
