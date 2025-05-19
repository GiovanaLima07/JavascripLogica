let variavelA, variavelB, resultadoA, resultadoB, diferenca;

alert("Digite o valor de A, precisa ser maior que B");
variavelA = parseInt(prompt());

alert("Digite o valor de B, precisa ser menor que A");
variavelB = parseInt(prompt());

resultadoA = variavelA * variavelA;
resultadoB = variavelB * variavelB;

diferenca = resultadoA - resultadoB;

alert("O resultado do quadrado da diferença de A para B é " + diferenca);
