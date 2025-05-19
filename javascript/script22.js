function calcularHorasExtras() {
    let horasTrabalho, horasExtra, valor, valorExtra;

    alert("Qual o valor do seu salário?");
    valor = parseFloat(prompt());

    alert("Quantas horas semanais trabalhadas?");
    horasTrabalho = parseFloat(prompt());

    if (horasTrabalho > 40) {
        horasExtra = horasTrabalho - 40;
        valorExtra = valor / 2;
        alert("Você trabalhou " + horasExtra + " horas extras e receberá R$" + valorExtra + " extra, ao total R$" + (valor + valorExtra));
    } else {
        alert("Nenhuma hora extra foi feita.");
    }
}

calcularHorasExtras();
