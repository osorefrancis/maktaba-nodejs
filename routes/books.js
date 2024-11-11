import express from "express";
import booksController from "../controllers/books.js";

const router = express.Router();

router.get("/", booksController.index); // Displays a list of books
router.get("/new", booksController.create); // Displays a form to create a new book
router.post("/", booksController.store);
router.get("/:id", booksController.show);
router.get("/:id/edit", booksController.edit);
router.put("/:id", booksController.update);
router.delete("/:id", booksController.delete);

export default router;
