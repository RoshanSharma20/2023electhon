const mongoose = require('mongoose');
const { Schema } = mongoose;
const emailValidator = require('email-validator');

// const db_link = 'mongodb+srv://Admin:Hlg1ffHicDVBhva9@cluster0.3sbnncb.mongodb.net/test';
const db_link = "mongodb://127.0.0.1:27017/voterDatabase"
mongoose.connect(db_link)
    .then((db) => {
        console.log('voters database connected');
    })
    .catch((err) => {
        console.log(err);
    });

//creating the userSchema
const voterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function () {
            return emailValidator.validate(this.email);
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 3,
        validate: function () {
            return this.confirmPassword == this.password;
        }
    },
    activityA:
    {
        type: Boolean,
        default: false
    },
    activityB:
    {
        type: Boolean,
        default: false
    },
    activityC:
    {
        type: Boolean,
        default: false
    },
    activityD:
    {
        type: Boolean,
        default: false
    },
    totalPoints:
    {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const voterModel = mongoose.model('voterModel', voterSchema);

module.exports = voterModel;