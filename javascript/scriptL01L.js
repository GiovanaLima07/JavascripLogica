let letra_a, letra_b, letra_c;
let quadrado_a, quadrado_b, quadrado_c, resultado;

alert("Digite o valor de A:");
letra_a = parseInt(prompt());

alert("Digite o valor de B:");
letra_b = parseInt(prompt());

alert("Digite o valor de C:");
letra_c = parseInt(prompt());

quadrado_a = letra_a * letra_a;
quadrado_b = letra_b * letra_b;
quadrado_c = letra_c * letra_c;

resultado = quadrado_a + quadrado_b + quadrado_c;

alert("A soma dos quadrados dos três valores lidos é " + resultado);
