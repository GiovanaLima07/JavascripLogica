let habitantes, eleitores, votosBranco, votosNulos, votosValidos, semvoto;
let percBranco, percNulos, percValidos;

alert("Algoritmo que conta o número total de eleitores.");

habitantes = parseFloat(prompt("Número de habitantes:"));
votosValidos = parseFloat(prompt("Quantos votos válidos?"));
votosBranco = parseFloat(prompt("Quantos votos em branco?"));
votosNulos = parseFloat(prompt("Quantos votos em nulos?"));

eleitores = votosValidos + votosBranco + votosNulos;
alert("O total de eleitores são: " + eleitores);

percBranco = (votosBranco / eleitores) * 100;
percNulos = (votosNulos / eleitores) * 100;
percValidos = (votosValidos / eleitores) * 100;
semvoto = habitantes - eleitores;

alert("Percentual de votos brancos: " + percBranco.toFixed(2) + "%");
alert("Percentual de votos nulos: " + percNulos.toFixed(2) + "%");
alert("Percentual de votos válidos: " + percValidos.toFixed(2) + "%");
alert("Total de pessoas que não votaram ou não são aptas a votar: " + semvoto);
