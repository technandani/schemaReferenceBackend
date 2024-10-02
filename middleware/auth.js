const jwt = require('jsonwebtoken');
const secret = 'Nandani@123'; // Use environment variables for secret in production

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);

    if (!token) return res.sendStatus(401); // No token provided

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.sendStatus(403); // Token invalid or expired
        req.user = user; // Token contains user data
        next();
    });
}

module.exports = { authenticateToken };
