const router = require('express').Router();
const { Dogs } = require('../../models');
const withAuth = require('../../utils/auth');

// Create dog and info.
//router.use(bodyParser.urlencoded({ extended: false}));
router.post('/dog', async (req, res) => {
    const information = {
    // goodWithKids: req.body.goodWith.kids,
   //  goodWithOtherDogs: req.body.goodWith.otherDogs,
   //  goodWithCat: req.body.goodWith.cat,
   //  age: req.body.age,
     gender: req.body.gender,
     breed: req.body.breed,
    // size: req.body.size
    };

    // Get a single dog 
    router.get('/:id', (req, res) => {
      Dogs.findAll({
              where: {
                  gender: req.body.gender,
                  commonName: req.body.commonName
              }
          })
          .then(dbCommentData => res.json(dbCommentData))
          .catch(err => {
              console.log(err);
              res.status(500).json(err);
          })
  });


    //console.log('Good with Kids:', goodWith.kids);
    //console.log('Good with other dogs:', goodWith.otherDogs);
    //console.log('Good with cats:', goodWith.cat);
    //console.log('Dogs age:', age);
    console.log('Dogs gender:', gender);
    console.log('Dogs common name:', commonName);
    console.log('Dogs size:', size);
    
    res.send('Form submitted')
});


module.exports = router;