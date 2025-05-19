let dolares, cotacao, conversao;

alert("Digite o valor da cotação do dólar:");
cotacao = parseFloat(prompt());

alert("Digite a quantidade de dólar que possui:");
dolares = parseFloat(prompt());

conversao = dolares * cotacao;

alert("A conversão do dólar para reais é R$ " + conversao.toFixed(2));
