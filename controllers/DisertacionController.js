const { Disertacion } = require('../database/sequelize')

DisertacionController = {}
DisertacionController.get = async (id) => {
    try {
        return await Disertacion.findByPk(id,{
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
DisertacionController.deletea = async (id) => {
    try {
        return await Disertacion.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {
        return error
    }
}
DisertacionController.gets = async () => {
    try {
        return await Disertacion.findAll({
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
DisertacionController.create = async (pDisertacion) => {
    try {
        return await Disertacion.create(pDisertacion)
    } catch (error) {
        return error
    }
}

DisertacionController.update = async (pDisertacion) => {
    try {
        return await Disertacion.update(pDisertacion,{
            where: {
                id: pDisertacion.id
            }
        })
    } catch (error) {
        return error
    }
}

module.exports = DisertacionController