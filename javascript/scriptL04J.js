let dividendo = parseInt(prompt("Digite o valor do dividendo:"));
let divisor = parseInt(prompt("Digite o valor do divisor (diferente de zero):"));
let quociente = 0;

if (divisor === 0) {
    alert("Erro: divisão por zero não é permitida.");
} else {
    while (dividendo >= divisor) {
        dividendo -= divisor;
        quociente++;
    }
    alert("Resultado da divisão inteira: " + quociente);
}
