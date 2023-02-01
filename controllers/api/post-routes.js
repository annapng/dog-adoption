const router = require('express').Router()
const { DOGS } = require('../../models')
const withAuth = require('../../utils/auth')

router.post(bodyParser.urlencoded({ extended: false}))
router.post('/sumbit-form', (req, res) => {
    const goodWithKids = req.body.goodWith
    const likesToPlay = req.body.likesToPlay
    const name = req.body.name
    const age = req.body.age
    const gender = req.body.gender
    const commonName = req.body.commonName
    const breed = req.body.breed
    const size = req.body.size

    console.log('Good with Kids:', goodWithKids);
    console.log('Likes to play:', likesToPlay);
    console.log('Dogs name:', name);
    console.log('Dogs age:', age);
    console.log('Dogs gender:', gender);
    console.log('Dogs common name:', commonName);
    console.log('Dogs breed:', breed)
    console.log('Dogs size:', size)
    
    res.send('Form sumbitted')
})


