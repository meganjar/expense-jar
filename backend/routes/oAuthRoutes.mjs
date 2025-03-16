import express from "express";
import passport from "passport";


const router = express.Router();

// Auth init
router.get("/login/google", passport.authenticate("google", 
  { scope: ["email", "profile", "openid"] }
));      

// Auth callback

router.get("/login/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login", // Redirect on failure
    successRedirect: "http://localhost:5173/", // Redirect on success
  })
)

router.get('/logout', async (req, res, next) => {
  try {
    req.logout();
    res.redirect('/');
    }  catch (err) {
     next(err);
    }
  });


export default router;