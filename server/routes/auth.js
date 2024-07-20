const jwt = require("jsonwebtoken");

const authenticationToken = (req, res, next) => {
    // Get token from header
    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // Split the bearer token
    const token = authHeader.split(" ")[1];

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // Verify token
    jwt.verify(token, "TaskWave", (err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: "Token is not valid" });
        }
        
        // Add user from payload to request object
        req.user = decoded;
        next();
    });
};

module.exports = { authenticationToken };
