const User = require('../models/user');
const bcrypt = require('bcryptjs');


class AuthController {
    async register(req, res) {

        //Checking if the user os already in the database
        const loginExist = await User.findOne({email: req.body.email});
        if(loginExist) return res.status(400).send("Login already exists");

        //HASH THE PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //Create a new user
        const email = req.body.email;
        const password = hashedPassword;

        let user;

        try {
            user = new User({email, password});
            await user.save();
        }catch(err) {
            return res.status(422).json({message: err.message});
        }
        res.send('login');

    }
    async login(req, res) {

        //Checking if the email exists
        const user = await User.findOne({email: req.body.email});
        if (!user) return res.status(400).send('Email or password is wrong!');

        //Checking if the PASSWORD IS CORRECT
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send('Email or password is wrong');

        //Create and assign a token
        res.send('login');
    }
}

module.exports = new AuthController();