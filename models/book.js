import fs from "node:fs";

const rawBooks = fs.readFileSync("books.json");
const books = JSON.parse(rawBooks);

class Book {
  static async getAllBooks() {
    return books;
  }

  static async getById(bookId) {
    const book = books.find((item) => item.id === bookId);
    return book;
  }

  static async createBook() {
    // TODO: Handle book creation
  }
}

export default Book;
