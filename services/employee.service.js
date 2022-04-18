const { uuid }  = require('uuidv4');
const Employee = require('../models/employee');

exports.getAllEmployee = async function () {
    return await Employee.find();
}

exports.create = async function (obj) {
    if (!obj.name) throw Error('Name is required.');
    if (!obj.email) throw Error('Email is required.');
    let employees = await Employee.create({
        _id: uuid(),
        name: obj.name,
        email: obj.email,
        position: obj.position,
        office: obj.office,
        salary: obj.salary
    });
    return employees;
}

exports.edit = async function (_id, obj) {
    if (!_id) throw Error('Id is required.');
    let employees = await Employee.findOneAndUpdate(
        {
            _id: _id
        },
        {
            $set:
            {
                name: obj.name,
                email: obj.email,
                position: obj.position,
                office: obj.office,
                salary: obj.salary
            }
        }, { new: true }).exec();
    return employees;
}

exports.delete = async function (_id) {
    if (!_id) throw Error('Id is required.');
    let employees = await Employee.remove({ _id: _id });
    return employees;
}