const router = require('express').Router()
const { User } = require('../../models');

//Creates the new user 
router.post('/', async (req, res) => {
    try {
        const userData = await User.create (req.body);

        req.session.save(() => {

        req.session.user_id = userData.id;
        req.session.logged_in = true ;

        res.status(200).json(userData);
    });
    } catch (err) {
        res.status(400).json(err);
    }
});

//Checks to see if the user is valid
router.post('/login', async (req, res) => {
    try { 
        const userData = await User.findOne({ where : { email: req.body.email }});

        if (!userData) {
            res 
            .status(400)
            .json({ meessage: 'Error, inncorrect credientials! Please try again!'});

        return;
        }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'Welcome in!'})
    })
    } catch ( err) { 
        res.status(400).json(err);
    }
})

//Logs out the user, destroys the current session
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end()
    }
})

//Exports
 module.exports = router;