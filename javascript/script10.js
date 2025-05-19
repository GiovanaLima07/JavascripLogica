let custoFabrica, distribuidor, imposto, carroNovo;

custoFabrica = parseFloat(prompt("Qual o valor de fábrica do carro?"));

distribuidor = custoFabrica * 28 / 100;
imposto = custoFabrica * 45 / 100;
carroNovo = custoFabrica + distribuidor + imposto;

alert("O custo final para o consumidor será: R$ " + carroNovo.toFixed(2));
