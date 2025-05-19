let tempoGasto, velocidadeMedia, distancia, combustivelUsado;

alert("Digite quantas horas gastas na viagem:");
tempoGasto = parseFloat(prompt());

alert("Digite a velocidade média em km durante a viagem:");
velocidadeMedia = parseFloat(prompt());

distancia = tempoGasto * velocidadeMedia;
combustivelUsado = distancia / 12;

alert("A quantidade de combustível gasto em litros é " + combustivelUsado + " litros");
alert("De acordo com o tempo gasto de " + tempoGasto + " horas e velocidade média de " + velocidadeMedia + " km/h");
