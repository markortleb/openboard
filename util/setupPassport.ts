import passport from "passport";
import * as passportStrategy from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User.js";


const setupPassport = function() {
    passport.use(
        new passportStrategy.Strategy(async (username, password, done) => {
          try {
            const user = await User.findOne({ username: username });
            if (!user) {
              return done(null, false, { message: "Incorrect username" });
            };
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
              // passwords do not match!
              return done(null, false, { message: "Incorrect password" })
            }
            return done(null, user);
          } catch(err) {
            return done(err);
          };
        })
    );
    
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
      
    passport.deserializeUser(async (id, done) => {
        try {
          const user = await User.findById(id);
          done(null, user);
        } catch(err) {
          done(err);
        };
    });

    return passport;
};


export {
    setupPassport
}
