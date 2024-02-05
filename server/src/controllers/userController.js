const UserModel = require('../models/user')
const jwt = require('jsonwebtoken');

//login controller 
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);
    try {
        const user = await UserModel.login(email, password);

        //create token
        const token = await user.generateAuthToken(user._id, user.email);
        res.status(200).json({ user, token });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const signupUser = async (req, res) => {
    const { name, email, phone, password,college,workshop, transactionid  } = req.body;
    try {

        const user = await UserModel.signup(name, email, phone, password,college,workshop, transactionid );

        //create token
        const token = await user.generateAuthToken(user._id, user.email);

        res.status(201).json({ user, token })

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// reset password controller 



module.exports = { loginUser, signupUser, };