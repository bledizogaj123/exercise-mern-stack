const e = require('express');
const bcrypt = require('bcrypt')
const validator = require('validator');

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
userSchema.statics.signup = async function (email, password) {
    //Validation
    if(!email || !password){
        throw Error('All fields must be filled!')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid!')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Pass not strong enough')
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email already in use!')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });

    return user;


}

module.exports = mongoose.model('User', userSchema)