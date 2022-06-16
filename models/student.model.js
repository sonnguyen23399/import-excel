const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Movie = sequelize.define('Movie', {
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
module.exports = Movie;