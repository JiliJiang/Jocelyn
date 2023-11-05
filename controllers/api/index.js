// here we start express and require all of the files containing our api routes
const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);

module.exports = router;