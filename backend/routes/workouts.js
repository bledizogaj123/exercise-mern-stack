const express = require('express');
const {
    createWorkout, 
    getWorkout,
    getWorkouts,
} = require('../controllers/workoutController')

const router = express.Router();

//GET all
router.get('/',getWorkouts)

//GET single
router.get('/:id', getWorkout)

//POST add new
router.post('/', createWorkout)

//Delete
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete' })
})

//Update
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update' })
})

module.exports = router;