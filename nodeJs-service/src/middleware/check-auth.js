const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const decoded = jwt.verify(token,"secret");
        req.userInfo = decoded;
        next();
    } catch(err) {
        return res.status(401).json({success:false, message:"not authorized", err})
    }

}