const router = require('express').Router();
const User = require('../models/User');
const argon2 = require("argon2");


// register

router.post("/register", async (req, res) => {
    try {
        // generate new password
        const hashPassword = await argon2.hash(req.body.password);
        const isMatch = await argon2.verify(hashPassword, req.body.password);
        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        });
        // save user and send response
        const user = await newUser.save();
        res.status(200).json(user._id); 
    }catch (error) {
        res.status(500).json(error);
    }
});
//login
router.post("/login", async (req, res) => {
    try {
        // find user
        const user = await User.findOne
        ({username: req.body.username});
        !user && res.status(400).json("Wrong username or password");


        // validate password
        const validatePassword = await argon2.verify(
            user.password, 
            req.body.password);
        !validatePassword && res.status(400).json("Wrong username or password");
        // send response
        res.status(200).json({_id: user._id, username: user.username});

        }catch (error) {
            res.status(500).json(error);
        }
    })


module.exports = router;