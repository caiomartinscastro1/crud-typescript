const People = require('../models/People');

const deletar = (req , res) => {
    const { id } = req.params;

    People.destroy(
        {
            where: {
                id: id,
            },
        },
    );

    res.status(200).json(
        {
            "message": "Usuario deletado com sucesso",
        },
    );

}

module.exports = deletar;