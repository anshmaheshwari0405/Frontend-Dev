function calculateBill() {
    let baseCost = parseFloat(document.getElementById("baseCost").value);
    let diningType = document.getElementById("diningType").value;
    let resultBox = document.getElementById("result");

    if (isNaN(baseCost) || baseCost <= 0) {
        resultBox.innerHTML = "⚠️ Please enter a valid base cost.";
        return;
    }

    let gst = baseCost * 0.05;
    let serviceTax = diningType === "dinein" ? baseCost * 0.10 : 0;

    let totalBeforeTip = baseCost + gst + serviceTax;

    let tip = totalBeforeTip > 2000 ? totalBeforeTip * 0.08 : 0;

    let finalTotal = totalBeforeTip + tip;

    resultBox.innerHTML = `
        <p>💵 <b>Base Amount:</b> ₹${baseCost.toFixed(2)}</p>
        <p>📊 <b>GST (5%):</b> ₹${gst.toFixed(2)}</p>
        <p>🍽️ <b>Service Tax (${diningType === "dinein" ? "10%" : "0%"}):</b> ₹${serviceTax.toFixed(2)}</p>
        <p>💰 <b>Tip (if applicable):</b> ₹${tip.toFixed(2)}</p>
        <hr>
        <p>🧾 <b>Final Total:</b> ₹${finalTotal.toFixed(2)}</p>
    `;
}
