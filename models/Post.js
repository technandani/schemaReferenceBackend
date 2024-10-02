const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User model
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);