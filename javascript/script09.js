let salario, percentual, reajuste, total;

salario = parseFloat(prompt("Qual o valor do salário mensal atual: "));
percentual = parseFloat(prompt("Qual o valor em porcentagem do reajuste?"));

reajuste = (salario / 100) * percentual;
total = salario + reajuste;

alert("O salário sofrerá um reajuste de: " + reajuste.toFixed(2) + " reais, passando a ser: " + total.toFixed(2) + " reais.");
