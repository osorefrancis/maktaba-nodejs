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
  const books = [
    {
      id: 1,
      published: "October 2024",
      title: "The Accidental Artist",
      author: "Billy Connolly",
      imgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSX-a6gZLrxGrk_sJLUQhG5f9PBw1r_POZa8AgYpAtB_uCH96io",
      description: "My drawings started by accident. I was on tour in Montreal a few years ago and found myself sheltering from the pishing rain in an art store."
    },
    {
      id: 2,
      published: "October 2024",
      title: "Dogs and Their Humans",
      author: "Noel Fitzpatrick",
      imgUrl: "https://books.google.co.ke/books/publisher/content?id=T4kPEQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72NfUJbF8ms31bO5nsgDVIiDxn_ASyY87orz8iMjUbfoPO99KpvCnwrNgS-tI-Wm6jESPMrtVwP3k1ioIB1HTfBMFFe59JLuzojVaLAHB8BJ2Nq0w4xqJCJS0SYijr7W9vFhaIS",
      description: "D'A beautiful book' Greg JamesThere’s no love quite like that between a dog and their human. ."
    },
    {
      id: 3,
      published: "November 2021",
      title: "Diddly Squat",
      author: "Jeremy Clarkson",
      imgUrl: "https://books.google.co.ke/books/publisher/content?id=eFMPEQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7013gdGMuxish6vzHEloDHfu4tyJDddfUMmdXx2XFg1FAVq5CZfvJvzjQ6J1aUEj7-6w3YLxA2OYw-4pHmQDGkZYQDeAZKjUmvGi1J-5zzUTCXf9PBIPf4CPpi5prRhL0P7afMQ",
      description: "It's been another memorable year on Diddly Squat Farm - will the chickens finally come home to roost?"
    },
    {
      id: 4,
      published: "October 2024",
      title: "The Striker",
      author: "Ana Huang",
      imgUrl: "https://books.google.co.ke/books/publisher/content?id=D0XtEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73RQMBqD2dpwrs4tPmCdKd44Zz1Dniolhd32CNMlgbFHjxX2NXOUm_DxgYOWuS_RbLXpZciRxw4IpIabERzP1spyVOAdbreofeLf48Ydr91iEE5iNt0ltAkY8XoJsnAy6oIc0T5",
      description: "She writes new adult and contemporary romance with deliciously alpha heroes, strong heroines, and plenty of steam, angst, and swoon sprinkled in. "
    },
    {
      id: 5,
      published: "March 2024",
      title: "War",
      author: "Bob Woodward",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQz1jdl6AA7aUvMQqWkMIhDEwmjZP0Pt0K7MefY8qemUAjp1UA",
      description: "Two-time Pulitzer Prize winner Bob Woodward tells the revelatory, behind-the-scenes story of three wars—Ukraine, the Middle East and the struggle for the American Presidency. "
    },
    {
      id: 6,
      published: "October 2024",
      title: "Brothers",
      author: "Alex Van Halen",
      imgUrl: "https://books.google.co.ke/books/publisher/content?id=pXz2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7301S28Y9C8H-dkZ0LuKZB4rMe1EkBXTB_h-b8hbCr1RSUoTCr3Vlp5ulj0876ghoW5t4_gm4orR2Iw-s8OBOWW6IyWjBGukxv9Pls_K08vNw-3niPAm13NzEPe3NYqtZtXFlhB",
      description: "In this intimate and open account – nothing like any rock-and-roll memoir you’ve ever read – Alex Van Halen shares his personal story of family, friendship, music and brotherly love in a remarkable tribute to his beloved brother and band mate."
    },
    {
      id: 7,
      published: "October 2024",
      title: "Karla's Choice",
      author: "Nick Harkaway",
      imgUrl: "https://books.google.co.ke/books/publisher/content?id=y0QDEQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72Dm-QFxiI9e720sB3peBuEhaCRJNU3GdZ59-hIMCjtIxtovmL0NrdmTHCi4KAhtdeSFB7oYiNdjKBP342zzebpGA9B-L69J-fki5gvR-8mFK1BEGSodKsdK5k5f3POr0YtBA2q",
      description: "With the wreckage of the West’s spy war with the Soviets strewn across Europe, he has eyes only for a more peaceful life. "
    },
    {
      id: 8,
      published: "October 2024",
      title: "Eat Like a Girl",
      author: "Dr. Mindy Pelz",
      imgUrl: "https://books.google.co.ke/books/publisher/content?id=tVUEEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71dm9P1BJuAZN0DH1OFq7Py3Cc_t7hzphkspvuqebsF8tw4aSPlztYiaIObhG5QKtwlOQUuXXM5VVT5GKfoCfrN8SAfC3fkbJk03x9yBhCYM8nYqDKRG_lJdis5T9qaYWjr-nxN",
      description: "Discover how to harness the power of food to support your body’s natural rhythms, empowering you to heal and thrive in this cookbook based on the revolutionary international bestseller, Fast Like a Girl."
    },
    {
      id: 9,
      published: "October 2024",
      title: "The Waiting",
      author: "Michael Connelly",
      imgUrl: "https://books.google.co.ke/books/content?id=i0eN0AEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72ANsR1Qeqy-yM0Hv33mRcwHluaVqkq7see7U7_jb05R7ktYiVuYFqOgRdRESkOaRouB8v8BoYK5Yl7wDLs2f9CY2NTuUKAviDza-rn6vp251iqodJoDGOjASmerTS6z6a7vxTP",
      description: "Renée Ballard and the LAPD's Open-Unsolved Unit get a hot shot DNA connection between a recently arrested man and a serial rapist and murderer who went quiet twenty years ago. "
    }
  ]
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
