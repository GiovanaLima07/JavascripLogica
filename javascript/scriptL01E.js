let valor, taxa, prestacao, periodo;

alert("Digite o valor:");
valor = parseFloat(prompt());

alert("Digite o valor da taxa:");
taxa = parseFloat(prompt());

alert("Digite o valor do tempo em anos:");
periodo = parseFloat(prompt());

prestacao = valor + ((valor * (taxa / 100)) * periodo);

alert("O valor da prestação será de R$ " + prestacao.toFixed(2));
