const voterModel = require('../models/voterModel');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const JWT_KEY = 'iamaresponsiblevoter';


//get all voters to display for leaderboard
module.exports.getAllVoters = async function getAllVoters(req, res) {
    try {

        let voterData = await voterModel.find().sort({
            totalPoints: -1
        }).limit(12);
        if (voterData) {
            res.json({
                message: "voters data retrieved",
                data: voterData
            })
        }
        else {
            res.json({
                message: "no users to retrieve"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


//signup for voters
module.exports.voterSignup = async function voterSignup(req, res) {
    try {
        let voter =
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        }
        console.log(voter);
        let voterdata = await voterModel.create(voter);
        if (voterdata) {
            res.json({
                message: "voter has been added",
                data: voterdata
            });
        }
        else {
            res.json({
                message: "no data"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

//login for voters
module.exports.voterLogin = async function voterLogin(req, res) {
    try {
        let data = req.body;
        if (data.email) {
            let user = await voterModel.findOne({ email: data.email });
            if (user) {
                //need to implement the bcrypt function here later
                if (user.password == data.password) {
                    let uid = user['_id'];//the payload contains the unique id
                    let jwtToken = jwt.sign({ payload: uid }, JWT_KEY);//token obtained from payload + algo + JWT_KEY
                    res.cookie('login', jwtToken, { httpOnly: true });//sending the token in the response
                    res.json({
                        message: "user has logged in",
                        userDetails: data
                    })
                }
                else {
                    res.status(404).json({
                        message: "wrong credentials"
                    })
                }
            }
            else {
                res.json({ message: "user not found" });
            }
        }
        else {
            res.json({
                message: "empty field found"
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}


//logout function
module.exports.voterLogout = function voterLogout(req, res) {
    try {
        res.cookie('login', ' ', { maxAge: 1 });
        res.json({
            message: "user logged out successfully"
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}