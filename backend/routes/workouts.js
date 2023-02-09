const express = require('express');
const Workout = require('../models/workoutModel')
const router = express.Router();

//GET all
router.get('/', (req, res) => {
    res.json({ mssg: 'GET ALL WORKOUTS' })
})

//GET single
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET SINGLE' })
})

//POST add new
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

//Delete
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete' })
})

//Update
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update' })
})

module.exports = router;