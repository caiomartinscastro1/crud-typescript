const sequelize = require('sequelize');
const conn = new sequelize('teste' , 'root' , '' , {
    host: 'localhost',
    dialect: 'mysql',
});

conn.authenticate().then(() => {
    console.log('Conected on database');
}).catch((err) => {
    console.log(err);
});

module.exports = conn;