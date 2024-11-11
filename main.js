import express from "express";
import ejsLayouts from "express-ejs-layouts";

import authRoutes from "./routes/auth.js";
import dashboardRoutes from "./routes/dashboard.js";
import booksRoutes from "./routes/books.js";

import NavItem from "./models/navItem.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.set("views", "./views");
app.use(express.static("public"));

// Middleware to add Nav Items to each request
app.use(async (req, res, next) => {
  const navItems = await NavItem.getAllNavItems();
  res.locals.navItems = navItems;
  // console.log("Current Path:", req.path);
  res.locals.currentPath = req.path;
  next();
});

// Routes
app.use("/auth", authRoutes);
app.use("/", dashboardRoutes);
app.use("/books", booksRoutes);

// Start the server and listen to the assigned port.
app.listen(port, () => {
  console.log("Server running on port:", port);
});
