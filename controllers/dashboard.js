export default {
  // Displays the Dashboard
  index: (req, res) => {
    res.render("dashboard", { title: "Dashboard" });
  },
};
