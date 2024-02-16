const challengeRouter = require('express').Router();

const { createChallenge, updateScore } = require("../controllers/challengeConroller");
const verifyAuth = require('../middlewares/authorization');

challengeRouter.route("/challenge").post(createChallenge);
challengeRouter.route("/solution").post(verifyAuth, updateScore);

module.exports = challengeRouter;