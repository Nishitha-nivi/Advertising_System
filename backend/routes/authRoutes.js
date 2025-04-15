const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { name, email, password, preferences } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, preferences });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
