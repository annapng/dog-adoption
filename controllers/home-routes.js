const router = require('express').Router()
const { Dogs, User } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    res.render('landing', {
        logged_in: req.session.logged_in,
    });
})

module.exports = router;

