for (let celsius = 10; celsius <= 100; celsius += 10) {
    let fahrenheit = (9 * celsius + 160) / 5;
    alert(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}
