const router = require('express').Router();
const { Dogs, User } = require('../models');
const withAuth = require('../utils/auth');


// Get home page for testing
router.get('/', async (req, res) => {
    res.render('landing', {
        logged_in: req.session.logged_in,
    });
})

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    res.render('login');
});


router.get('/search', async (req, res) => {
    res.render('search', {
        logged_in: req.session.logged_in
    })
})

module.exports = router;