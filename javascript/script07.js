let idadeEmDias, anos, meses, dias;

alert("Algoritmo que descobre quantos dias vividos possui");

anos = parseFloat(prompt("Quantos anos tem? "));
meses = parseFloat(prompt("Quantos meses desde seu último aniversário?"));
dias = parseFloat(prompt("Quantos dias desde seu último mêsversário?"));

idadeEmDias = dias + (meses * 30) + (anos * 365);

alert("Você possui " + idadeEmDias + " dias vividos.");
