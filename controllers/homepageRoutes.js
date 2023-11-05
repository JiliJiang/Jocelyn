const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/authorize');

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard')
});

router.get('/login', (req, res) => {
    res.render('login')
});


module.exports = router;