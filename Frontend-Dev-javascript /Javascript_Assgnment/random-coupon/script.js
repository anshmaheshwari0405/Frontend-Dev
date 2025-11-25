function generateCoupon() {
    let resultBox = document.getElementById("result");

    let couponNumber = Math.floor(Math.random() * 100) + 1;
    let message = "";

    if (couponNumber <= 30) {
        message = "🎉 You won a 10% discount!";
    } else if (couponNumber <= 60) {
        message = "🎉 You won a 20% discount!";
    } else if (couponNumber <= 90) {
        message = "🎉 You won a 30% discount!";
    } else {
        message = "🏆 You won a 50% Mega Offer!";
    }

    if (isPrime(couponNumber)) {
        message += " ✨ Prime number bonus applied!";
    }

    resultBox.innerHTML = `
        <p>🎫 <b>Coupon Number:</b> ${couponNumber}</p>
        <p>${message}</p>
    `;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
