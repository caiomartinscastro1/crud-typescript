const People = require('../models/People');

const cadastro = (req , res) => {
    const {name , age} = req.body;

    People.create(
        {
            name: name,
            age: age,
        },
    );

    res.status(200).json(
        {
            "message": "Cadastrado com sucesso",
        },
    );
}

module.exports = cadastro;