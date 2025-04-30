/*Create a base class Book with properties title, author, and isAvailable.
Create a subclass BorrowableBook that extends Book and adds a property borrower.

Add a method borrowBook(borrowerName) that:

Sets isAvailable to false
Stores the borrower's name
Prevents borrowing if the book is already borrowed

Add a method returnBook() that:

Sets isAvailable back to true
Clears the borrower's name*/

// Base class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
}

// Subclass extending Book
class BorrowableBook extends Book {
  constructor(title, author) {
    super(title, author); // Call the Book constructor
    this.borrower = null;
  }

  borrowBook(borrowerName) {
    if (!this.isAvailable) {
      console.log(`"${this.title}" is already borrowed by ${this.borrower}.`);
      return;
    }
    this.isAvailable = false;
    this.borrower = borrowerName;
    console.log(`${borrowerName} has borrowed "${this.title}".`);
  }

  returnBook() {
    if (this.isAvailable) {
      console.log(`"${this.title}" is already in the library.`);
      return;
    }
    this.isAvailable = true;
    console.log(`${this.borrower} has returned "${this.title}".`);
    this.borrower = null;
  }
}

// Example usage
const book1 = new BorrowableBook("1984", "George Orwell");
book1.borrowBook("Alice");
book1.borrowBook("Bob");
book1.returnBook();
book1.borrowBook("Bob");
