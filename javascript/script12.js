let fahrenheit, celsius;

fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));

celsius = (fahrenheit - 32) * 5 / 9;

alert("Celsius é igual a: " + celsius.toFixed(2));
