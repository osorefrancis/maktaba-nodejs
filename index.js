import express from "express";
import ejsLayouts from "express-ejs-layouts";
import fs from "node:fs";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.set("views", "./views");
app.use(express.static("public"));

const rawBooks = fs.readFileSync("books.json");
const books = JSON.parse(rawBooks);

// Displays the Dashboard
app.get("/", (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
});

// Displays the books list
app.get("/books", (req, res) => {
  // const page = Number(req.query.page) || 1;
  // const limit = Number(req.query.limit) || 12;
  const page = req.query.page || 1;
  const limit = req.query.limit || 12;

  console.log("query params:", req.query);
  console.log("page:", page);
  console.log("limit:", limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // console.log("params:", req.query);
  const paginatedBooks = books.slice(startIndex, endIndex);
  const totalPages = Math.ceil(books.length / limit);

  // console.log(books);
  res.render("books/index", {
    title: "Books",
    books: paginatedBooks,
    currentPage: page,
    totalPages: totalPages,
    firstItem: startIndex + 1,
    lastItem: endIndex,
    totalItems: books.length,
  });
  // res.json({
  //   title: "Books",
  //   books: paginatedBooks,
  //   currentPage: page,
  //   totalPages: totalPages,
  //   firstItem: startIndex || 1,
  //   lastItem: endIndex,
  //   totalItems: books.length,
  // });
});

// Displays a form to create a book
app.get("/books/new", (req, res) => {
  res.render("books/new", { title: "New Book" });
});

// Handles the form submission for creating a book
app.post("/books", (req, res) => {
  res.status(201).send("Created a Book");
});

// Displays a book's details
app.get("/books/:id", (req, res) => {
  const book = books.find((item) => String(item.id) === req.params.id);
  // console.log("params:", req.params);
  // console.log("Kitabu:", book);
  const huyu = [];
  res.render("books/show", { title: "Book Details", book: book });
});

// Displays a form to edit a book
app.get("/books/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);
  // console.log("Kitabu:", book);
  res.render("books/edit", { title: "Edit Book", book });
});

// Handles the form submission for editing a book
app.put("/books/:id", (req, res) => {
  res.status(201).send("Update Book Details for ID: " + req.params.id);
});

// Destroys the book given a certain id
app.delete("/books/:id", (req, res) => {
  res.status(200).send("Delete Book Details for ID: " + req.params.slug);
});

// Start the server and listen to the assigned port.
app.listen(port, () => {
  console.log("Server running on port:", port);
});
