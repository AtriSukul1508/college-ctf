const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema(
    {
        input: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            default: 0,
        },
        category: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Challenge", challengeSchema);
