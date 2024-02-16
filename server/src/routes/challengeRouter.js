const challengeRouter = require('express').Router();

const { createChallenge, updateScore } = require("../controllers/challengeConroller");

challengeRouter.route("/challenge").post(createChallenge);
challengeRouter.route("/solution").post(updateScore);

module.exports = challengeRouter;