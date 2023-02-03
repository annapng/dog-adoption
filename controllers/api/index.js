const router = require('express').Router()
const applicationRoutes = require('./application-routes')
const dogRoutes = require('./dog-routes')
const userRoutes = require('./user-routes')

router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);

module.exports = router;


