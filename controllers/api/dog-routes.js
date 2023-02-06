const router = require('express').Router()
const { Dogs, goodWith, DogPics } = require('../../models')
const withAuth = require('../../utils/auth')

// Allows user to see all dogs once logged in
router.post('/:id', withAuth, async (req, res) => {
    try {
        const newDogs = await Dogs.create({
            ...req.body,
            user_id: req.session.user_id,
        })
    res.status(200).json(newDogs)
    } catch (err) { 
        res.status(400).json(newDogs)
    }
})

// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const dogsData = await Dogs.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         })
//     if (!dogsData) { 
//         res.status(404).json({ message: 'Error, no dogs found under this id.'})
//         return;
//     }

//     res.status(200).json(dogsData);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

// get all dog
router.get('/', async (req, res) => {
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

  // get a single dog
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