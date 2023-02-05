const router = require('express').Router();
const { Dogs, goodWith, DogPics } = require('../models')
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

router.get('/dog/:id', async (req, res) => {
    try {
        const dbDogData = await Dogs.findByPk(req.params.id, {
            include: [{
                model: DogPics,
                attributes: ['dogPic'],
            },
            {
                model: goodWith,
                attributes: [
                    'otherDogs',
                    'cat',
                    'kids'
                ]
            }
            ],
        });
        const dog = dbDogData.get({ plain: true });
        res.render('singledog', { ...dog, logged_in: req.session.logged_in});
        console.log({ ...dog })
        //console.log({ dog })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;