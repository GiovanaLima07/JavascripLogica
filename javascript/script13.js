let notaUm, notaDois, notaTres, mediaFinal;

notaUm = parseInt(prompt("Qual é a sua primeira nota?"));
notaDois = parseInt(prompt("Qual é a sua segunda nota?"));
notaTres = parseInt(prompt("Qual é sua terceira nota?"));

mediaFinal = ((notaUm * 2) + (notaDois * 3) + (notaTres * 5)) / 10;

alert("Sua média final é igual a: " + mediaFinal.toFixed(2));
