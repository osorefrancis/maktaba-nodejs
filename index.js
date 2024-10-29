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
  // console.log(books);
  res.render("books/index", { title: "Books", books });
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
  res.render("books/show", { title: "Book Details", book });
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
