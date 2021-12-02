const User = require('../models/user')

class AuthController {
    async register(req, res) {
        res.status(200).send('register');
        let user;
        user = new User({ name: "1233", password: "wsdevwd"});
        user.save();
    }
    async login(req, res) {
        res.send("login");
    }
}

module.exports = new AuthController();