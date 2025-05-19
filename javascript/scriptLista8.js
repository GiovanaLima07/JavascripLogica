let palavra;
let quantidade, i, letra;

alert("Digite uma palavra");
alert("Para encerrar o algoritmo digite 'sair'.");

palavra = prompt("Digite uma palavra:");

do {
    if (palavra.toUpperCase() !== "SAIR") {
        quantidade = 0;

        for (i = 0; i < palavra.length; i++) {
            letra = palavra.charAt(i).toLowerCase();

            if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
                quantidade = quantidade + 1;
            }
        }

        alert("A palavra '" + palavra + "' tem " + quantidade + " vogal(is).");
        palavra = prompt("Digite outra palavra ou 'sair' para encerrar:");
    }
} while (palavra.toUpperCase() !== "SAIR");

alert("Programa encerrado.");
