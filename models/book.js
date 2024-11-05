import prisma from "../config/prisma.js";

class Book {
  static async getAllBooks() {
    return prisma.book.findMany({
      orderBy: {
        id: "asc",
      },
    });
  }

  static async getById(bookId) {
    return prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });
  }

  static async createBook(data) {
    return prisma.book.create({
      data,
    });
  }

  static async update(bookId, data) {
    return prisma.book.update({
      where: { id: bookId },
      data,
    });
  }

  static async delete(bookId) {
    return prisma.book.delete({
      where: { id: bookId },
    });
  }
}

export default Book;
