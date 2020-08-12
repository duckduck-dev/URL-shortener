const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');


const Users = mongoose.model('users');


passport.serializeUser( (user, done)=> {
      done(null, user.id);
});


passport.deserializeUser((id, done)=> {
      Users.findById(id)
      .then( (user) => {
            done(null, user);
      } );
});

passport.use(new GoogleStrategy({
      clientID : keys.googleClientID,                                                  /*'84073497495-6sjf68pdk3p0igap085ed5b68nuea9o2.apps.googleusercontent.com',*/
      clientSecret : keys.googleClientSecret,                                                                                         /*'arBI787ngnXBEKjqgaP4DjFv',*/
      callbackURL: '/auth/google/callback',
      proxy : true
      },
      async (accessToken, refreshToken, profile, done) => {
            const existingUser = await Users.findOne( { googleId : profile.id } );
            if (existingUser) {
                 return done(null, existingUser)
            }

            const addNew = await new Users( { googleId : profile.id } );   //{Link:'dsfsdf'}
            addNew.save();
            done(null, addNew);
      }
));

