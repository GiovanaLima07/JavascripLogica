let raio, altura, volume;

alert("Algoritmo que calcula o valor do volume de uma lata de óleo");
alert("Digite o valor do raio:");
raio = parseFloat(prompt());

alert("Digite o valor da altura:");
altura = parseFloat(prompt());

volume = 3.14 * (raio * raio) * altura;

alert("O volume da lata de óleo é " + volume);
