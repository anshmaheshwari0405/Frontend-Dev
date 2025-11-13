function analyzeMarks() {
    let marks = [
        parseFloat(document.getElementById("m1").value),
        parseFloat(document.getElementById("m2").value),
        parseFloat(document.getElementById("m3").value),
        parseFloat(document.getElementById("m4").value),
        parseFloat(document.getElementById("m5").value)
    ];


    if (marks.some(isNaN)) {
        document.getElementById("result").innerHTML = "⚠️ Please enter all 5 subject marks.";
        return;
    }

    let total = marks.reduce((a, b) => a + b, 0);
    let average = total / 5;
    let percentage = average; 

    let failedSubjects = marks.filter(m => m < 40).length;

    let grade = "";
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 75) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 40) grade = "C";
    else grade = "Fail";

    let remark = "";
    if (failedSubjects >= 2) {
        remark = "❌ Repeat Year (Failed in 2 or more subjects)";
    } else if (percentage < 40) {
        remark = "❌ Fail";
    } else {
        remark = "✅ Passed";
    }

    document.getElementById("result").innerHTML = `
        📘 <b>Total Marks:</b> ${total}/500 <br>
        📊 <b>Average:</b> ${average.toFixed(2)} <br>
        🎯 <b>Percentage:</b> ${percentage.toFixed(2)}% <br>
        🏅 <b>Grade:</b> ${grade} <br>
        📢 <b>Remark:</b> ${remark}
    `;
}
