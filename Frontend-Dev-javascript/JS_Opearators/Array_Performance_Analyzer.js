let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

let passingStudents = scores.filter(score => score >= 50).length;

console.log("Scores: " + scores);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Number of Students Passed: ${passingStudents}`);
