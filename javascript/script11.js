let salario, comissao, comissaoTotal, porcentagem, carrosVendidos, vendasTotal, salarioFinal;

salario = parseFloat(prompt("Qual o valor de seu salário?"));
comissao = parseFloat(prompt("Qual o valor da comissão paga por cada carro vendido?"));
carrosVendidos = parseInt(prompt("Quantos carros foram vendidos?"));
vendasTotal = parseFloat(prompt("Qual o valor total das vendas?"));

comissaoTotal = comissao * carrosVendidos;
porcentagem = vendasTotal * 5 / 100;
salarioFinal = salario + comissaoTotal + porcentagem;

alert("O total do salário final será de: R$ " + salarioFinal.toFixed(2));
