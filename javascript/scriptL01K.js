let reais, cotacao, conversao;

alert("Digite o valor da cotação do dólar:");
cotacao = parseFloat(prompt());

alert("Digite a quantidade de reais que possui:");
reais = parseFloat(prompt());

conversao = reais / cotacao;

alert("A conversão de reais para dólares é $ " + conversao.toFixed(2));
