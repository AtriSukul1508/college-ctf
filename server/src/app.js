require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRouter');
const challengeRouter = require('./routes/challengeRouter');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(cors())

require('./db/connection');
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser())
app.use('/userapi', userRouter);
app.use('/challengeapi', challengeRouter);
app.get('/',async (req,res)=>{
    return res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
})