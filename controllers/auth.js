import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/user.js";

passport.use(
  new LocalStrategy({ usernameField: "email" }, async (email, password, cb) => {
    try {
      // Find user by email
      const user = await User.getUserByEmail(email);
      if (!user) {
        return cb(null, false, { message: "User not found!" });
      }

      // Verify the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return cb(null, user);
      } else {
        return cb(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      return cb(error);
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, {
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

export default {
  // Display the Login form
  login: (req, res) => {
    // TODO: render a login page
    res.render("login", { title: "Login" });
  },

  // Handles the login form submission
  authenticate: (req, res) => {
    passport.authenticate("local", {
      successReturnToOrRedirect: "/",
      failureRedirect: "/auth/login",
      failureMessage: true,
    })(req, res, next);
  },

  // Destroy the user's session to logout
  logout: (req, res) => {
    res.logout();
    res.redirect("/auth/login");
  },
};
