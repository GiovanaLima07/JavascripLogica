let totalArea = 0;
let resposta;

do {
    let comodo = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do(a) " + comodo + " em metros:"));
    let comprimento = parseFloat(prompt("Digite o comprimento do(a) " + comodo + " em metros:"));

    let area = largura * comprimento;
    totalArea += area;

    alert("Área do(a) " + comodo + ": " + area.toFixed(2) + " m²");

    resposta = prompt("Deseja adicionar outro cômodo? (sim/não)");

} while (resposta.toLowerCase() === "sim");

alert("A área total da residência é: " + totalArea.toFixed(2) + " m²");
