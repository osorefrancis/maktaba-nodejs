import express from "express";

const app = express();
const port = 3000;

// Displays the Dashboard
app.get("/", (req, res) => {
  res.status(200).send("Karibu to Maktaba");
});

// Displays the books list
app.get("/books", (req, res) => {
  res.status(200).send("Books List");
});

// Displays a form to create a book
app.get("/books/new", (req, res) => {
  res.status(200).send("Form to Create a Book");
});

// Handles the form submission for creating a book
app.post("/books", (req, res) => {
  res.status(201).send("Created a Book");
});

// Displays a book's details
app.get("/books/:id", (req, res) => {
  res.status(200).send("Book Details for ID: " + req.params.id);
});

// Displays a form to edit a book
app.get("/books/:id/edit", (req, res) => {
  res.status(201).send("Form to update Book Details for ID: " + req.params.id);
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
