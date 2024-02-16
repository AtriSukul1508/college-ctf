const challengeRouter = require('express').Router();

const { createChallenge, updateScore, getChallenges } = require("../controllers/challengeConroller");
const verifyAuth = require('../middlewares/authorization');

challengeRouter.route("/challenge").post(createChallenge);
challengeRouter.route("/solution").post(verifyAuth, updateScore);
challengeRouter.route("/challenge").get(getChallenges);

module.exports = challengeRouter;