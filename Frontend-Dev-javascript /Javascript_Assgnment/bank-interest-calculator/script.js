function calculateInterest() {
    let accountType = document.getElementById("accountType").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let years = parseInt(document.getElementById("years").value);

    let rate = 0;

    if (accountType === "savings") {
        rate = 4;
    } else if (accountType === "fixed") {
        rate = 6.5;
    }

    if (amount > 100000) {
        rate += 1;
    }

    let total = amount * Math.pow((1 + rate / 100), years);
    total = total.toFixed(2);

    document.getElementById("result").innerHTML = `
        💰 <b>Final Balance after ${years} years:</b> ₹${total}<br>
        📈 <b>Interest Rate Applied:</b> ${rate}% per annum
    `;
}
