const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const keys = require('./config/keys')

// Initialize App
const app = express()

// Register Middleware
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['KJHASIDUYJkjhaskjdhkajhKJSHDAKJ6767']
  })
)
app.use(passport.initialize())
app.use(passport.session())

// Register Models
require('./models/User')

// Register API Routes
app.use('/auth/google', require('./routes/authRouter'))
app.use('/api', require('./routes/apiRouter'))

// Register Web Routes
if (process.env.NODE_ENV === 'production') {
  // Serve static files
  app.use(express.static('client/build'))

  //Handle remaining routes for SPA
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Connect Database
mongoose.connect(keys.mongoURI)

// Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log('Listening on port ', process.env.PORT || 5000)
})
