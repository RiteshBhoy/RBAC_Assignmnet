const express = require('express');
const { getUserProfile, adminRoute } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const { role } = require('../middlewares/roleMiddleware');
const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.get('/admin', protect, role(['Admin']), adminRoute);

module.exports = router;
