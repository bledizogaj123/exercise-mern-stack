const express = require('express');
const {
    createWorkout, 
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController')

const router = express.Router();

//GET all
router.get('/',getWorkouts)

//GET single
router.get('/:id', getWorkout)

//POST add new
router.post('/', createWorkout)

//Delete
router.delete('/:id', deleteWorkout)

//Update
router.patch('/:id', updateWorkout)

module.exports = router;