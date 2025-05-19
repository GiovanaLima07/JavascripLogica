let num;

alert("Digite um número, positivo ou negativo:");
num = parseInt(prompt());

if (num < 0) {
    num = num * -1;
}

alert("O valor absoluto (módulo) do número é: " + num);
