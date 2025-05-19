let celsius = 10;
let fahrenheit = 32;

alert(celsius + "°C = " + fahrenheit + "°F");

while (celsius < 100) {
    celsius = celsius + 10;
    fahrenheit = (9 * celsius + 160) / 5;
    alert(celsius + "°C = " + fahrenheit + "°F");
}
