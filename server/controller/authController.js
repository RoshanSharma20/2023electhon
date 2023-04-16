const express = require('express');
const voterModel = require('../models/voterModel');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const JWT_KEY = 'iamaresponsiblevoter';

module.exports.protectRoute = async function protectRoute(req, res, next) {
    try {
        let token;
        if (req.cookies.login) {
            token = req.cookies.login;
            let payload = jwt.verify(token, JWT_KEY);//upon verification the function returns payload
            if (payload) {
                const user = await voterModel.findById(payload.payload);
                // req.role = user.role;
                req.id = user.id;
                next();
            }
            else {
                return res.json({
                    message: "user not verified"
                })
            }
        }
        else {
            res.status(404).json({
                message: "you are not allowed"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}