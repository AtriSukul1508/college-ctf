const jwt = require('jsonwebtoken');
const UserModel = require('../models/user')

const isTokenExpired = (token) => {
    console.log(token);
    const payloadBase64 = token.split('.')[1];
    const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
    console.log('payload',payloadBase64,'ueowriu',decodedJson)
    const decoded = JSON.parse(decodedJson)
    console.log("decoded",decoded);
    const exp = decoded.exp;
    console.log("exp",exp);
    const expired = (Date.now() >= exp * 1000)
    return expired
}

const verifyAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log('autho',req.headers.authorization,'dfsa',authorization,'safd',authorization.split(' ')[1])
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }
    const token = authorization.split(' ')[1]
    try {
        const { _id, email } = jwt.verify(token, process.env.SECRET_KEY);
        console.log('ere',_id,email)
        req.user = await UserModel.findById({ _id }).select('_id');
        console.log('er',req.user,token)
        next();
    } catch (err) {
        if (isTokenExpired(token)) {
            return res.status(401).json({ error: "Token expired" })
        }
        console.log(`Error while verifying token - ${err}`);
        res.status(401).json({ error: "Request is not authorized" });
    }
}

module.exports = verifyAuth;