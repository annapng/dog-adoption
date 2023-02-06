const router = require('express').Router();
const { Dogs, goodWith, DogPics } = require('../models')
const withAuth = require('../utils/auth');


// Get home page for testing
router.get('/', async (req, res) => {
    res.render('landing', {
        logged_in: req.session.logged_in,
    });
})

// Get sign up handlebars
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Get login handlebars
router.get('/login', (req, res) => {
    res.render('login');
});

// Get confirm handlebars
router.get('/confirm', (req, res) => {
    res.render('confirm');
});

// Get search handlebars
router.get('/search', async (req, res) => {
    res.render('search', {
        logged_in: req.session.logged_in
    })
})

// Get search return handlebars and return search inputs
router.get('/searchreturn', async (req, res) => {
    try {
        const dbDogData = await Dogs.findAll({
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
        const dogs = dbDogData.map(dog => dog.get({ plain: true }));
        res.render('searchreturn', { dogs, logged_in: req.session.logged_in });
        console.log({ ...dogs  })
        //console.log({ dogs })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
  });

// get and return a single dog
router.get('/dogs/:id', async (req, res) => {
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
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;