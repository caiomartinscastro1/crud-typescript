const People = require('../models/People');

const update = (req , res) => {

    const { name , age , id } = req.body;

    People.update(
        {
            name: name,
            age: age,
        },
        {
            where: {
                id: id,
            },    
        },
    );

    res.status(200).json(
        {
            "message": "Usuario atualizado com sucesso",
        },
    );

}

module.exports = update;