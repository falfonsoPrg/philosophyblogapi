const { Glosario } = require('../database/sequelize')

GlosarioController = {}
GlosarioController.get = async (id) => {
    try {
        return await Glosario.findByPk(id,{
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
GlosarioController.deletea = async (id) => {
    try {
        return await Glosario.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {
        return error
    }
}
GlosarioController.gets = async () => {
    try {
        return await Glosario.findAll({
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
GlosarioController.create = async (pGlosario) => {
    try {
        return await Glosario.create(pGlosario)
    } catch (error) {
        return error
    }
}

GlosarioController.update = async (pGlosario) => {
    try {
        return await Glosario.update(pGlosario,{
            where: {
                id: pGlosario.id
            }
        })
    } catch (error) {
        return error
    }
}

module.exports = GlosarioController