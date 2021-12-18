const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
    if(!req.body.name || !req.body.email || !req.body.phone || !req.body.password){
        console.log("missing field")
        res.status(406).send({message: "Invalid field"});
    }else if(req.body.email.indexOf('@') === -1){
        console.log("invalid mail")
        res.status(406).send({message: "Invalid email adress"});
    }else {
        const password = bcrypt.hashSync(req.body.password, 8);
        let time = new Date().getTime();
        let reference = time.toString(36).toUpperCase();
        User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            reference: "USER_"+reference
        }).then(user => {
            const token = jwt.sign(
                {
                    userId: user.id,
                    reference: user.reference,
                },
                'someupersecret',
                {
                    expiresIn: '1h'
                }
            );
            res.status(201).send({data: user, token: token, message: "signed up"});
        }).catch(err => {
            console.log("** ERROR ", err, " **");
            res.status(500).send({message: "error"});
        });
    }
};
exports.login = (req, res, next) => {};
exports.editProfile = (req, res, next) => {};
exports.deleteProfile = (req, res, next) => {};
exports.getUser = (req, res, next) => {};
exports.getAllUser = (req, res, next) => {};
