//src/controllers/authController.js 

const authService = require('../services/authService');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await authService.login(username, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        await authService.register(username, password);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.logout = (req, res) => {
    // Invalidate the token (implementation depends on how you manage tokens)
    res.json({ message: 'User logged out successfully' });
}

