const { Router } = require("express");
const router = Router();
const movies = require('./movies.route')

router.use('/api',movies);

module.exports = router;
