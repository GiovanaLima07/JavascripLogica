let totalArea = 0;
let continuar;

while (true) {
    let nomeComodo = prompt("Digite o nome do cômodo: ");
    let largura = parseFloat(prompt("Digite a largura do cômodo (em metros): "));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros): "));

    let area = largura * comprimento;
    alert("A área do cômodo " + nomeComodo + " é: " + area.toFixed(2));

    totalArea = totalArea + area;

    continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO): ");

    if (continuar.toLowerCase() === "nao") {
        alert("A área total acumulada da residência é: " + totalArea.toFixed(2));
        break;
    }
}
