const express = require('express');
const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token)
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send("err --->", err);
        }
        res.user = decoded;
        next();
    });
}


module.exports = verifyToken;