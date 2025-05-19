let letra_a, letra_b, letra_c;
let resultado;

alert("Digite o valor de A:");
letra_a = parseInt(prompt());

alert("Digite o valor de B:");
letra_b = parseInt(prompt());

alert("Digite o valor de C:");
letra_c = parseInt(prompt());

resultado = (letra_a + letra_b + letra_c) * (letra_a + letra_b + letra_c);

alert("O quadrado da soma dos três valores é: " + resultado);
