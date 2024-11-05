import Book from "../models/book.js";

export default {
  // Displays the books list
  index: async (req, res) => {
    // const page = Number(req.query.page) || 1;
    // const limit = Number(req.query.limit) || 12;
    const page = req.query.page || 1;
    const limit = req.query.limit || 12;
    const display = req.query.display || "grid";
    const search = req.query.search?.toLowerCase() || "";

    // console.log("query params:", req.query);
    // console.log("page:", page);
    // console.log("limit:", limit);

    const books = await Book.getAllBooks();

    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(search) ||
        book.authors.some((author) => author.toLowerCase().includes(search))
    );
    // console.log("filteredBooks:", filteredBooks);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // console.log("params:", req.query);
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredBooks.length / limit);

    // console.log(books);
    res.render("books/index", {
      title: "Books",
      books: paginatedBooks,
      currentPage: page,
      totalPages: totalPages,
      firstItem: startIndex + 1,
      lastItem: endIndex,
      totalItems: filteredBooks.length,
      display: display,
      search: search,
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
  },

  // Displays a form to create a book
  create: (req, res) => {
    res.render("books/new", { title: "New Book" });
  },

  // Handles the form submission for creating a book
  store: (req, res) => {
    res.status(201).send("Created a Book");
  },

  // Displays a book's details
  show: async (req, res) => {
    const book = await Book.getBookById(Number(req.params.id)); // Cast req.params.id as a Number as the Book model expects the id to be an integer
    // console.log("Book Object:", book);
    res.render("books/show", { title: "Book Details", book: book });
  },

  // Displays a form to edit a book
  edit: async (req, res) => {
    // const book = books.find((item) => String(item.id) === req.params.id);
    const book = await Book.getBookById(Number(req.params.id));
    // console.log("Kitabu:", book);
    res.render("books/edit", { title: "Edit Book", book });
  },

  // Handles the form submission for editing a book
  update: (req, res) => {
    res.status(201).send("Update Book Details for ID: " + req.params.id);
  },

  // Destroys the book given a certain id
  delete: (req, res) => {
    res.status(200).send("Delete Book Details for ID: " + req.params.slug);
  },
};
