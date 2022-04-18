'use strict'
const express = require('express');
const router = express.Router();
const employee = require('./employee');


router.use('/employees', employee);

router.use('*', function (req, res) {
	res.sendStatus(404);
});
module.exports = router;