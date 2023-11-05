const apiRoutes = require('./api');
const router = require('express').Router();
const homeRoutes = require('./homepageRoutes');

// home and api route 
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;