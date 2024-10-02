const express = require('express');
const { login, register } = require('../controllers/user');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.route('/register').post(register);  
router.route('/login').post(login);    

module.exports = router;