const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res, next) => {
    const { username, email, password, role } = req.body;

    try {
        const user = await User.create({ username, email, password, role });
        res.status(201).json({
            message: 'User registered successfully',
            token: generateToken(user._id),
        });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                message: 'Login successful',
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        next(error);
    }
};

exports.logout = (req, res) => {
    res.json({ message: 'Logout successful' });
};
