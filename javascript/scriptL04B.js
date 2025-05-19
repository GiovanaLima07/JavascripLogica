let i = 1;
let somatoria = 0;

while (i <= 500) {
    if (i % 2 === 0) {
        somatoria += i;
    }
    i++;
}

alert("A somatória dos números pares de 1 até 500 é: " + somatoria);
