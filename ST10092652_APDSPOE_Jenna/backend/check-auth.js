const jwt = require('jsonwebtoken');

// https://expressjs.com/en/4x/api.html#app.all&
module.exports=(req,res,next)=>
{
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,"secret_this_should_be_longer_than_it_is")
        next(); //pass control to the next handler
    }
    catch(error)
    {
        res.status(401).json({
            message:"Invalid token"
}); }
};
