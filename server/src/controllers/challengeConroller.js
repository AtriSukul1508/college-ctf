const User = require("../models/user");
const Challenge = require("../models/challenge");
const mongoose = require("mongoose");

const createChallenge = async (req, res) => {
    try {
        // Get all fields from body
        const { name, description, file, input, score, category } = req.body;

        // Create new challenge
        const challenge = new Challenge({
            name,
            description,
            file,
            input,
            score,
            category
        });

        const newChallenge = await challenge.save();

        return res.status(201).json({ message: "created",  challenge: newChallenge});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const updateScore = async (req, res) => {
    try {
        // Get the parameters from the body
        const { challengeId, answerInput } = req.body;
        const userId = req.user._id;

        // Find user and challenge
        const user = await User.findById(userId);
        const challenge = await Challenge.findById(challengeId);

        // If user is invalid
        if(!user) {
            return res.status(403).json({ error: "User not found" });
        }
        // If challenge not found
        if(!challenge) {
            return res.status(404).json({ error: "Challenge not found" })
        }

        // If challenge already solved by this user
        if(user.challenges && user.challenges.includes(challengeId)) {
            return res.status(409).json({ error: "Already Solved" });
        }

        // Check answer is true or not
        if(challenge.input !== answerInput) {
            return res.status(201).json({ correct: false });
        }

        // Add to users challenges
        user.challenges = user.challenges ? [...user.challenges, challengeId] : [challengeId];
        user.finishTime = Date.now();

        // Save changes on database
        await user.save();

        const responseData = await User.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)
                }
            },
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
                $project: {
                    password: false,
                    tokens: false
                }
            }
        ]);

        // Return updated data
        return res.status(201).json({ correct: true, getScore: challenge.score, user: responseData[0] });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createChallenge,
    updateScore
}