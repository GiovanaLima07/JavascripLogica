let numero = parseInt(prompt("Digite um número:"));

alert("Tabuada");

for (let contador = 1; contador <= 10; contador++) {
    let multiplicador = numero * contador;
    alert(`${numero} X ${contador} : ${multiplicador}`);
}
