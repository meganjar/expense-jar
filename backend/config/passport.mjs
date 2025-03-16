import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import users from "../model/users.mjs";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // check if returns a user
        const user =
          (await users.findOne({ googleId: profile.id })) || // or if we didn't
          (await users.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            picture: profile.photos[0].value,
          }));

        done(null, users);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((Users, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  const user = await users.findById(id);
  done(null, user);
});

export default passport;