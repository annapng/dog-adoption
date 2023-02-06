const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homes-routes.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);



// Added to format sign up handlebar testing
router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;