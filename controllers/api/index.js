const router = require('express').Router()
const dogRoutes = require('./dog-routes')
const userRoutes = require('./user-routes')
const postRoutes = require('./post-routes')

router.use('/search', postRoutes);
router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);


module.exports = router;


