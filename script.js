function convertToCelsius() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const resultText = document.getElementById("resultText");

    if (celsiusInput === "") {
        alert("Please enter a temperature in Celsius.");
        return;
    }

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;

    resultText.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}
