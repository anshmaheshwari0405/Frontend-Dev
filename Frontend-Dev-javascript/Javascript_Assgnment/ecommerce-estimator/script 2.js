function calculateEstimate() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    let isPremium = document.getElementById("isPremium").value === "true";
    let isRemote = document.getElementById("isRemote").value === "true";

    let deliveryFee = 0;
    let deliveryDays = 3;

    if (orderAmount < 500 && !isPremium) {
        deliveryFee = 50;
    }

    if (isRemote) {
        deliveryDays += 2;
    }

    let totalCost = orderAmount + deliveryFee;

    document.getElementById("result").innerHTML = `
        💰 <b>Total Cost:</b> ₹${totalCost}<br>
        ⏰ <b>Estimated Delivery Time:</b> ${deliveryDays} days
    `;
}
