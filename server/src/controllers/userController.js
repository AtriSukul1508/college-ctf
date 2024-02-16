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

// leaderboard
const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await UserModel.aggregate([
            {
                $lookup: {
                    from: "challenges",
                    localField: "challenges",
                    foreignField: "_id",
                    as: "challenges"
                }
            },
            {
                $addFields: {
                    score: {
                        $sum: "$challenges.score"
                    }
                }
            },
            {
                $match: {
                    score: {
                        $gt: 0
                    }
                }
            },
            {
                $sort: {
                    score: -1,
                    finishTime: 1
                }
            },
            {
                $project: {
                    password: false,
                    challenges: false,
                    tokens: false,
                    transactionid: false
                }
            }
        ])

        return res.status(200).json({ message: "success", leaderboard });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// reset password controller 



module.exports = { loginUser, signupUser, getLeaderboard };