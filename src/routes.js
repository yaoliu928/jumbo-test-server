const express = require('express');
const movieRoutes = require('./routes/movie');
const popularRoutes = require('./routes/popular');
const searchRoutes = require('./routes/search');

const router = express.Router();

router.use('/movies', movieRoutes);
router.use('/popular', popularRoutes);
router.use('/search', searchRoutes);

module.exports = router;