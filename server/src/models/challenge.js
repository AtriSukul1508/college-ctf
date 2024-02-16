const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ""
        },
        file: [{
            type: String,
        }],
        solvedBy: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        input: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            default: 0
        },
        category: {
            type: String
        }
    }
);

const Challenge = mongoose.models.Challenge || mongoose.model("Challenge", challengeSchema);
module.exports = Challenge;
