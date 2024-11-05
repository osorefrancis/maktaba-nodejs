import prisma from "../config/prisma.js";

export default class Book {
  static async getAllBooks() {
    return prisma.book.findMany({
      orderBy: {
        id: "asc",
      },
    });
  }

  static async getBookById(bookId) {
    return prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });
  }

  static async createBook(newBookData) {
    return prisma.book.create({
      newBookData,
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
