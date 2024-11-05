import prisma from "../config/prisma.js";
import fs from "node:fs";
import bycrypt from "bcrypt";

async function main() {
  // Define user variables
  const email = "francisosore8@gmail.com";
  const plainTextPassword = "chelsea";

  // Hash the plain text password
  const hashedPassword = await bycrypt.hash(plainTextPassword, 10);

  // Create a user with the hashed password
  const francis = await prisma.user.upsert({
    create: {
      email: email,
      name: "Francis Osore",
      password: hashedPassword,
    },
    update: {},
    where: {
      email: email,
    },
  });

  const martinPlainPasw = "martooooo";
  const martinEmail = "mkihuha@gmail.com";
  const hashedPassword1 = await bycrypt.hash(martinPlainPasw, 10);

  const martin = await prisma.user.upsert({
    create: {
      email: martinEmail,
      name: "Martin Kihuha",
      password: hashedPassword1,
    },
    update: {},
    where: {
      email: martinEmail,
    },
  });

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
