import express from "express";
import booksController from "../controllers/books.js";

const router = express.Router();

router.get("/", booksController.index);
router.get("/new", booksController.create);
router.post("/", booksController.store);
router.get("/:id", booksController.show);
router.get("/:id/edit", booksController.edit);
router.put("/:id", booksController.update);
router.delete("/:id", booksController.delete);

export default router;
