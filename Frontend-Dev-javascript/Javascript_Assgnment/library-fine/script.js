function getBookDelays() {
    const numBooks = parseInt(document.getElementById("numBooks").value);
    const bookInputsDiv = document.getElementById("bookInputs");
    const resultBox = document.getElementById("result");

    bookInputsDiv.innerHTML = "";
    resultBox.innerHTML = "";

    if (isNaN(numBooks) || numBooks <= 0) {
        bookInputsDiv.innerHTML = "⚠️ Please enter a valid number of books.";
        return;
    }

    for (let i = 1; i <= numBooks; i++) {
        bookInputsDiv.innerHTML += `
            <div class="input-box">
                <label>Book ${i} - Days Delayed:</label>
                <input type="number" id="delay${i}" placeholder="Enter days delayed">
            </div>
        `;
    }

    bookInputsDiv.innerHTML += `
        <button onclick="calculateFine(${numBooks})">Calculate Total Fine</button>
    `;
}

function calculateFine(numBooks) {
    let totalFine = 0;
    let fineDetails = "";
    let delayedReturns = 0;

    for (let i = 1; i <= numBooks; i++) {
        let days = parseInt(document.getElementById(`delay${i}`).value);
        let fine = 0;

        if (isNaN(days) || days <= 0) {
            fineDetails += `<p>Book ${i}: No delay or invalid input.</p>`;
            continue;
        }

        delayedReturns++;

        if (days <= 5) fine = days * 10;
        else if (days <= 10) fine = days * 20;
        else fine = days * 50;

        fineDetails += `<p>📘 Book ${i}: ${days} days late → ₹${fine}</p>`;
        totalFine += fine;
    }

    let penalty = delayedReturns > 3 ? 200 : 0;
    totalFine += penalty;

    const resultBox = document.getElementById("result");

    resultBox.innerHTML = `
        <h3>📊 Fine Summary</h3>
        ${fineDetails}
        <hr>
        <p>📚 Delayed Returns: ${delayedReturns}</p>
        <p>⚠️ Penalty (if applicable): ₹${penalty}</p>
        <p>💰 <b>Total Fine:</b> ₹${totalFine}</p>
    `;
}
