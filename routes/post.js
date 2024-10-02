const express = require('express');
const { createPost, getPosts } = require('../controllers/post');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Protect routes using authenticateToken middleware
router.post('/', authenticateToken, createPost);
router.get('/', authenticateToken, getPosts);

module.exports = router;
