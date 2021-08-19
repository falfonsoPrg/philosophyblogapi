const { Resenia } = require('../database/sequelize')

ReseniaController = {}
ReseniaController.get = async (id) => {
    try {
        return await Resenia.findByPk(id,{
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
ReseniaController.deletea = async (id) => {
    try {
        return await Resenia.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {
        return error
    }
}
ReseniaController.gets = async () => {
    try {
        return await Resenia.findAll({
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
ReseniaController.create = async (pResenia) => {
    try {
        return await Resenia.create(pResenia)
    } catch (error) {
        return error
    }
}

ReseniaController.update = async (pResenia) => {
    try {
        return await Resenia.update(pResenia,{
            where: {
                id: pResenia.id
            }
        })
    } catch (error) {
        return error
    }
}

module.exports = ReseniaController