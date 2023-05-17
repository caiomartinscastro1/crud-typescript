const People = require('../models/People');

const dados = async (req , res) => {

    const dados = await People.findAll(
        {
            raw: true
        }
    );

    console.log(dados);

    res.status(200).json(dados);
}

module.exports = dados;