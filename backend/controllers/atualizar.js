const People = require('../models/People');

const atualizar = async (req , res) => {

    const { id } = req.params;

    const dados =await People.findOne(
        {
            raw: true,
            where: {
                id: id,
            },
        },
    );

    console.log(dados);

    res.status(200).json(dados);

}

module.exports = atualizar;