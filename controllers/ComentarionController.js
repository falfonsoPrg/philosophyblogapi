const { Comentario } = require('../database/sequelize')

ComentarioController = {}
ComentarioController.get = async (id) => {
    try {
        return await Comentario.findByPk(id,{
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
ComentarioController.deletea = async (pId) => {
    try {
        return await Comentario.destroy({
            where: {
                id: pId
            }
        })
    } catch (error) {
        return error
    }
}
ComentarioController.gets = async () => {
    try {
        return await Comentario.findAll({
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
ComentarioController.create = async (pComentario) => {
    try {
        return await Comentario.create(pComentario)
    } catch (error) {
        return error
    }
}

ComentarioController.update = async (pComentario) => {
    try {
        return await Comentario.update(pComentario,{
            where: {
                id: pComentario.id
            }
        })
    } catch (error) {
        return error
    }
}

module.exports = ComentarioController