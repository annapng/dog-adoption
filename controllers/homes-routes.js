const router = require('express').Router();
const { Dogs, User } = require('../models');
const withAuth = require('../utils/auth');


// Get home page for testing
router.get('/', async (req, res) => {
    res.render('landing');
})

module.exports = router;