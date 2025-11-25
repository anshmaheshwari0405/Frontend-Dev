let productName = " wireless headphones PRO ";

let cleanedTitle = productName.trim().toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()).replace("Pro", "Pro Edition");

console.log("Cleaned Title: " + cleanedTitle);
console.log("Title Length: " + cleanedTitle.length);
