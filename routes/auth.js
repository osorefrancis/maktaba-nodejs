import express from "express";
import authController from "../controllers/auth.js";

const router = express.Router();

// Middleware to use plain layout for auth routes
router.use((req, res, next) => {
  req.app.set("layout", "layout/plain");
  next();
});

router.get("/login", authController.login); // Displays the login page
router.post("/login", authController.authenticate); // Handles the login form submission
router.post("/logout", authController.logout); // Logs out the user

export default router;
