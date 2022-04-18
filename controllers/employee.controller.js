const EmployeeService = require('../services/employee.service');

exports.getAll = async function (req, res, next) {
    try {
        let employees = await EmployeeService.getAllEmployee();
        return res.status(200).json(employees);
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

exports.create = async function (req, res, next) {
    try {
        let employees = await EmployeeService.create(req.body)
        return res.status(200).json({ employees });
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

exports.edit = async function (req, res, next) {
    try {
        let employees = await EmployeeService.edit(req.params._id, req.body);
        return res.status(200).json({ employees });
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

exports.delete = async function (req, res, next) {
    try {
        let employees = await EmployeeService.delete(req.params._id);
        return res.status(200).json({ employees });
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
}