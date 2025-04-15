const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) return res.status(401).json({ error: "Access Denied" });

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId);
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = authMiddleware;
