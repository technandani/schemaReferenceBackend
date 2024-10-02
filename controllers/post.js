const Post = require('../models/post');
const jwt = require('jsonwebtoken'); 


// Create a new post
async function createPost(req, res) {
    const { title, content } = req.body;
    const author = req.user.userId; 
    console.log(title, content, author);

    try {
        const newPost = new Post({ title, content, author });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

async function getPosts(req, res) {
    try {
        const userId = req.user.userId; // Get the user's ID from the token
        const posts = await Post.find({ author: userId }).populate('author', 'name email'); // Filter posts by author ID
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}



module.exports = { createPost, getPosts };
