import express from "express";
import ejsLayouts from "express-ejs-layouts";

import authRoutes from "./routes/auth.js";
import dashboardRoutes from "./routes/dashboard.js";
import booksRoutes from "./routes/books.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.set("views", "./views");
app.use(express.static("public"));

// Routes
app.use("/auth", authRoutes);
app.use("/", dashboardRoutes);
app.use("/books", booksRoutes);

// Start the server and listen to the assigned port.
app.listen(port, () => {
  console.log("Server running on port:", port);
});
