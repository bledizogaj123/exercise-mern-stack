const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');

//Get all
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts)
}

//Get Single
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
     }

    const workout = await Workout.findById(id)

    // if (!workout) {
    //     return res.status(404).json({ error: 'No such workout' })
    // }
    res.status(200).json(workout)
}

//Create new
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//Delete

//Update


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
}