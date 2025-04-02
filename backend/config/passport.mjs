import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import users from '../model/users.mjs';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://expense-jar.com/api/auth/login/google/callback',
      scope: ['email', 'profile', 'openid'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        //check if user
        let user = await users.findOne({ googleId: profile.id });

        // Create oauth user
        // no password
        if (!user) {
          user = await users.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            picture: profile.photos[0].value,
          });
        }
        done(null, user);
      } catch (err) {
        console.error('Google Auth Error:', err);
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  const user = await users.findById(id);
  return done(null, user);
});

export default passport;
