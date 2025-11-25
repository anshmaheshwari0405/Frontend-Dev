let feedback = "Great product! Fast delivery and amazing sound quality!";

let wordCount = feedback.split(" ").length;

let feedbackStatus = (feedback.includes("bad") || feedback.includes("poor")) ? "Needs Improvement" : "Positive Feedback";

console.log("Word Count: " + wordCount);
console.log("Feedback Status: " + feedbackStatus);
