const router = require('express').Router();

//const apiRoutes = require('./api');
//const homeRoutes = require('./home-routes.js');

//router.use('/', homeRoutes);
//router.use('/api', apiRoutes);

// Get home page for testing
router.get('/', async (req, res) => {
    res.render('landing');
})

module.exports = router;
