let baseMaior, baseMenor, altura, area;

baseMaior = parseFloat(prompt("Digite o valor da base maior: "));
baseMenor = parseFloat(prompt("Digite o valor da base menor: "));
altura = parseFloat(prompt("Digite o valor da altura: "));

area = (baseMaior + baseMenor) * altura / 2;

alert("A área do trapézio é: " + area);
