const express = require('express');
const path = require('path');
//const { register, login } = require('./controllers/authController'); 

const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../login.html'));
});

router.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, '../../news.html'));
});

router.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, '../../service.html'));
});

module.exports = router;