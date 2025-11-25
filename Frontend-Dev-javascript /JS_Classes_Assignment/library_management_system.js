class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      return true;
    }
    return false;
  }

  returnBook() {
    if (this.isIssued) {
      this.isIssued = false;
      return true;
    }
    return false;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "101"),
  new Book("Atomic Habits", "James Clear", "102"),
  new Book("Clean Code", "Robert C. Martin", "103"),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "104"),
];

function getAvailableBooks() {
  return books.filter((book) => !book.isIssued);
}

function issueBookByISBN(isbn) {
  const book = books.find((b) => b.isbn === isbn);
  if (book) {
    return book.issueBook();
  }
  return false;
}

console.log("Available Books:");
getAvailableBooks().forEach((b) => console.log(`${b.title} by ${b.author}`));

console.log("Issuing Book 103:", issueBookByISBN("103"));

console.log("Available Books After Issuing:");
getAvailableBooks().forEach((b) => console.log(`${b.title} by ${b.author}`));
