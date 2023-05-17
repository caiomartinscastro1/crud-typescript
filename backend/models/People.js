const sequelize = require('sequelize');
const conn = require('../db/conn');

const People = conn.define('people' , {
    name: {
        type: sequelize.STRING,
    },
    age: {
        type: sequelize.INTEGER,
    },
});

module.exports = People;