function calculateReward() {
    let level = parseInt(document.getElementById("level").value);
    let performanceScore = parseInt(document.getElementById("performance").value);
    let missionsCompleted = document.getElementById("missionsCompleted").value === "true";

    if (isNaN(level) || isNaN(performanceScore)) {
        document.getElementById("result").innerHTML = "⚠️ Please enter valid numbers for level and performance.";
        return;
    }

    let coins = (level * 50) + (performanceScore * 10);

    if (missionsCompleted) {
        coins *= 2;
    }

    let rank = coins > 1000 ? "Elite" : "Regular";

    document.getElementById("result").innerHTML = `
        🎮 <b>Level:</b> ${level}<br>
        💯 <b>Performance Score:</b> ${performanceScore}<br>
        🪙 <b>Total Coins Earned:</b> ${coins}<br>
        🏅 <b>Rank:</b> ${rank}
    `;
}
