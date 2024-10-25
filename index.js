import express from "express";
import ejsLayouts from "express-ejs-layouts";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.set("views", "./views");
app.use(express.static("public"));

// Displays the Dashboard
app.get("/", (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
});

// Displays the books list
app.get("/books", (req, res) => {
  res.render("books/index", { title: "Books" });
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
  res.render("books/show", { title: "Book Details", bookId: req.params.id });
});

// Displays a form to edit a book
app.get("/books/:id/edit", (req, res) => {
  res.render("books/edit", { title: "Edit Book", bookId: req.params.id });
});

// Handles the form submission for editing a book
app.put("/books/:id", (req, res) => {
  res.status(201).send("Update Book Details for ID: " + req.params.id);
});

// Destroys the book given a certain id
app.delete("/books/:id", (req, res) => {
  res.status(200).send("Delete Book Details for ID: " + req.params.id);
});

// Start the server and listen to the assigned port.
app.listen(port, () => {
  console.log("Server running on port:", port);
});
