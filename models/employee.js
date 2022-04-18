const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        position: {
            type: String
        },
        office: { type: String },
        salary: { type: Number }
    }
);

const Employee = mongoose.model('Employee', UserSchema);

module.exports = Employee;