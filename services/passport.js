const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('users')

// Method htat takes the user and passes it to the browser via cooke to
// authenticate follow-up request
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// Method that take a request from the browser and parses the cookie to retrieve
// the previously signed in user.
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })

      if (existingUser) {
        return done(null, existingUser)
      }

      const newUser = await new User({ googleId: profile.id }).save()
      done(null, newUser)
    }
  )
)
