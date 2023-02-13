const e = require('express');
const bcrypt = require('bcrypt')

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

//Static method signup
userSchema.statics.signup = async (email, password) => {
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already in use!')
    }

    const salt = await bcrypt.genSalt(10)

     
}

module.exports = mongoose.model('User', userSchema)