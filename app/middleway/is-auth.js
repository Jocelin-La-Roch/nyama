const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader){
        res.statusMessage = "Not Authenticated";
        res.status(401).end();
    }
    const token = authHeader.split(" ")[1];
    console.log("token: ", token);
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecret');
        console.log("decodeToken: ", decodedToken);
    } catch (err){
        res.status(500).end();
        console.log(err);
    }

    if(!decodedToken){
        res.statusMessage = "Not Authenticated";
        res.status(401).end();
    }

    req.userId = decodedToken.userId;
    next();
}
