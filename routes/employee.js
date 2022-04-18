'use strict';
const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employee.controller');

router.get('/', EmployeeController.getAll);
router.post('/', EmployeeController.create);
router.post('/:_id', EmployeeController.edit);
router.delete('/:_id', EmployeeController.delete);

module.exports = router;