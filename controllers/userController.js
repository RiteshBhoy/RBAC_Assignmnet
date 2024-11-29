exports.getUserProfile = (req, res) => {
    res.json({ user: req.user });
};

exports.adminRoute = (req, res) => {
    res.json({ message: 'Welcome to the Admin route!' });
};
