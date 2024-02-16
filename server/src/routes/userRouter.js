const { loginUser, signupUser } = require('../controllers/userController');
const { getLeaderboard } = require('../controllers/userController');

const userRouter = require('express').Router();

//login
userRouter.post('/login', loginUser);

//signup
userRouter.post('/signup', signupUser);

//leaderboard
userRouter.get('/leaderboard', getLeaderboard);


module.exports = userRouter;