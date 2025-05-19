for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 !== 0) {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        alert(`O fatorial de ${numero} é ${fatorial}`);
    }
}
