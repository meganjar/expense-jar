import express from "express";
import passport from "passport";
import { createUser } from "../controllers/users.mjs";

const router = express.Router();

// Auth init
router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["email", "profile", "openid"] }),
);

// Auth callback

router.get(
  "/login/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: true }),
  (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/`);
    res
      .status(200)
      .json({ message: "Google Login Successful", user: req.user });
  },
);

router.get("/logout", async (req, res, next) => {
  try {
    req.logout();
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

export default router;
