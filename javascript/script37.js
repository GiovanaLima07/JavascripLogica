function calcularPrecoFrutas() {
    let morangoKg, macaKg, totalKg;
    let descontoMorango, descontoMaca, precoMorango, precoMaca, totalPreco, desconto;

    morangoKg = parseInt(prompt("Quantos kg de morango foram comprado: "));
    macaKg = parseInt(prompt("Quantos kg de maçã foram comprados: "));

    if (morangoKg >= 5) {
        precoMorango = morangoKg * 2.20;
    } else {
        precoMorango = morangoKg * 2.50;
    }

    if (macaKg >= 5) {
        precoMaca = macaKg * 1.80;
    } else {
        precoMaca = macaKg * 1.50;
    }

    totalPreco = precoMaca + precoMorango;
    totalKg = macaKg + morangoKg;

    if (totalKg > 8 || totalPreco > 25) {
        desconto = totalPreco * 0.10;
        totalPreco = totalPreco - desconto;
    }

    alert("Foram comprados " + morangoKg + " Kg de morango e " + macaKg + " Kg de maçã, no total " + totalPreco.toFixed(2) + " R$.");
}

calcularPrecoFrutas();
