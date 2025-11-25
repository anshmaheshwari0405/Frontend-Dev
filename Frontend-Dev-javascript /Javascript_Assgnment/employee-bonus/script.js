function calculateBonus() {
    let baseSalary = parseFloat(document.getElementById("baseSalary").value);
    let rating = parseFloat(document.getElementById("rating").value);
    let experience = parseFloat(document.getElementById("experience").value);
    let resultBox = document.getElementById("result");

    if (isNaN(baseSalary) || isNaN(rating) || isNaN(experience) || baseSalary <= 0) {
        resultBox.innerHTML = "⚠️ Please fill all fields correctly.";
        return;
    }

    let bonusPercent = 0;
    if (rating === 5) bonusPercent = 20;
    else if (rating === 4) bonusPercent = 15;
    else if (rating === 3) bonusPercent = 10;
    else bonusPercent = 0;

    if (experience > 5) bonusPercent += 5;

    let calculatedBonus = (baseSalary * bonusPercent) / 100;

    let cappedBonus = calculatedBonus > 25000 ? 25000 : calculatedBonus;

    let totalSalary = baseSalary + cappedBonus;

    resultBox.innerHTML = `
        <p>💼 <b>Base Salary:</b> ₹${baseSalary.toFixed(2)}</p>
        <p>⭐ <b>Performance Rating:</b> ${rating}</p>
        <p>🧓 <b>Experience:</b> ${experience} years</p>
        <hr>
        <p>🎯 <b>Calculated Bonus:</b> ₹${calculatedBonus.toFixed(2)}</p>
        <p>🔒 <b>Capped Final Bonus:</b> ₹${cappedBonus.toFixed(2)}</p>
        <p>💰 <b>Total Salary After Bonus:</b> ₹${totalSalary.toFixed(2)}</p>
    `;
}
