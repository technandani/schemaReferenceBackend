const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const mongoose = require('mongoose');
const PORT = 3300;
const dotenv = require("dotenv");

dotenv.config();

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Mongo Error", err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); 

app.use('/users', userRouter);  
app.use('/posts', postRouter);  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
