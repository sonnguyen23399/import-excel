const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Student = sequelize.define('Student', {
    school: {
        type: DataTypes.STRING
    },
    class: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    score: {
        type: DataTypes.FLOAT(8, 1)
    }
}, {
    underscored: true
});
module.exports = Student;