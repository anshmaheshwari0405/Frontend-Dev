function checkWeather() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let humidity = parseFloat(document.getElementById("humidity").value);
    let windSpeed = parseFloat(document.getElementById("windSpeed").value);

    if (isNaN(temperature) || isNaN(humidity) || isNaN(windSpeed)) {
        document.getElementById("result").innerHTML = "⚠️ Please enter all weather values.";
        return;
    }

    let alertMessage = "";
    let advice = "";

    if (temperature > 35 && humidity > 70) {
        alertMessage = "🚫 Cancel: Heat Alert.";
    } else if (temperature < 10 || windSpeed > 40) {
        alertMessage = "🚫 Cancel: Cold/Windy Alert.";
    } else {
        alertMessage = "✅ Event Approved.";
    }

    if (temperature < 20) {
        advice = "🧥 Wear Jacket";
    } else if (temperature <= 30) {
        advice = "😊 Comfortable";
    } else {
        advice = "💧 Stay Hydrated";
    }

    document.getElementById("result").innerHTML = `
        🌡️ <b>Temperature:</b> ${temperature}°C<br>
        💧 <b>Humidity:</b> ${humidity}%<br>
        🌬️ <b>Wind Speed:</b> ${windSpeed} km/h<br><br>
        ⚠️ <b>Status:</b> ${alertMessage}<br>
        🩵 <b>Advice:</b> ${advice}
    `;
}
