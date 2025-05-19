let numero = 1;

while (numero <= 10) {
    if (numero % 2 !== 0) {
        let fatorial = 1;
        let multiplicador = 1;

        while (multiplicador <= numero) {
            fatorial *= multiplicador;
            multiplicador++;
        }

        alert("O fatorial de " + numero + " é " + fatorial);
    }

    numero++;
}
