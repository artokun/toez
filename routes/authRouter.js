const passport = require('passport')
const router = require('express').Router()

// Register Auth Service
require('../services/passport')

router.get('/', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get('/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/')
})

module.exports = router