const express =  require('express');
 
const router = express.Router();

//GET all
router.get('/', (req, res) => {
    res.json({mssg: 'GET ALL WORKOUTS'})
})

//GET single
router.get('/:id', (req, res) => {
    res.json({mssg:'GET SINGLE'})
})

//POST add new
router.post('/', (req, res) => {
    res.json({mssg:'POST A NEW'})
})

//Delete
router.delete('/:id', (req, res) => {
    res.json({mssg:'Delete'})
})

//Update
router.patch('/:id', (req, res) => {
    res.json({mssg:'Update'})
})

module.exports  = router;