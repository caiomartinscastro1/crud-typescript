const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const conn = require('./db/conn');

conn.sync();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(3000 , () => {
    console.log('Server on port: 3000');
});