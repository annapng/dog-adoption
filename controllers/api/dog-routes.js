const router = require('express').Router()
const { Dogs } = require('../../models')
const withAuth = require('../../utils/auth')

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

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const dogsData = await Dogs.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        })
    if (!dogsData) { 
        res.status(404).json({ message: 'Error, no dogs found under this id.'})
        return;
    }

    res.status(200).json(dogsData);
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;