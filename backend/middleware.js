const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req,res,next) =>{


    //first check request headers hasauthorization or not
    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({ error: 'Token not found' });

    //extract token from headers part of jwt
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({ error: 'unauthorized' });
    }

    try{
        //verify the generated token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //attach user information to the request object
        req.user = decoded
        next();
    }catch(error){
        console.log(error);
        res.status(401).json({error: "Invalid Token!"});
    }   
}

//function to generate jwt

const generateToken = (userData) => {

    //generate a new jet token using userdata

    return jwt.sign(userData, process.env.JWT_SECRET, {expiresIn: (60*60*24) });
}

module.exports = {jwtAuthMiddleware, generateToken};




