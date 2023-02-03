const router = require('express').Router()
const { Dogs } = require('../../models')
const withAuth = require('../../utils/auth')

router.use(bodyParser.urlencoded({ extended: false}))
router.post('/sumbit-form', (req, res) => {
    const information = {
     goodWithKids: req.body.goodWith.kids,
     goodWithOtherDogs: req.body.goodWith.otherDogs,
     goodWithCat: req.body.goodWith.cat,
     age: req.body.age,
     gender: req.body.gender,
     commonName: req.body.commonName,
     size: req.body.size
    };

    Dogs.findall({ where: information})
    .then(data => {
        res.json(data);
        console.log('data')
      })
      .catch(err => {
        console.error(err);
        res.status(500).send("Error retrieving dogs");
      });


    console.log('Good with Kids:', goodWithKids);
    console.log('Good with other dogs:', goodWithOtherDogs);
    console.log('Good with cats:', goodWithCat);
    console.log('Dogs age:', age);
    console.log('Dogs gender:', gender);
    console.log('Dogs common name:', commonName);
    console.log('Dogs size:', size);
    
    res.send('Form sumbitted')
})


