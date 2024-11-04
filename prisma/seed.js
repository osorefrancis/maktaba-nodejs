import prisma from "../config/prisma.js";
import fs from "node:fs";

async function main() {
  // Load books data from JSON file
  const books = JSON.parse(fs.readFileSync("books.json"));

  // Seed each book entry into the database
  for (const book of books) {
    await prisma.book.create({
      data: {
        title: book.title,
        authors: book.authors,
        isbn: book.isbn,
        pageCount: book.pageCount,
        publishedDate: new Date(book.publishedDate),
        thumbnailUrl: book.thumbnailUrl,
        shortDescription: book.shortDescription,
        longDescription: book.longDescription,
        categories: book.categories,
      },
    });
  }

  console.log("Books seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
