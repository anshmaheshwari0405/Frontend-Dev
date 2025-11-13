function calculateTotal() {
    let showTime = document.getElementById("showTime").value;
    let numTickets = parseInt(document.getElementById("numTickets").value);
    let customerType = document.getElementById("customerType").value;

    if (isNaN(numTickets) || numTickets <= 0) {
        document.getElementById("result").innerHTML = "❗ Please enter a valid ticket number.";
        return;
    }
    
    let ticketPrice = (showTime === "morning") ? 120 : 180;
    let basePrice = ticketPrice * numTickets;

    let discount = 0;
    if (customerType === "student") {
        discount = 0.10 * basePrice;
    } else if (customerType === "senior") {
        discount = 0.20 * basePrice;
    }

    let discountedTotal = basePrice - discount;

    let serviceFee = (numTickets > 3) ? 50 : 0;

    let finalAmount = discountedTotal + serviceFee;

    document.getElementById("result").innerHTML = `
        🎫 <b>Base Price:</b> ₹${basePrice}<br>
        💸 <b>After Discount:</b> ₹${discountedTotal.toFixed(2)}<br>
        🧾 <b>Final Amount (incl. fee):</b> ₹${finalAmount.toFixed(2)}
    `;
}
