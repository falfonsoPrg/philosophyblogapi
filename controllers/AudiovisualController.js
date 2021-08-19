const { Audiovisual } = require('../database/sequelize')

AudiovisualController = {}
AudiovisualController.get = async (id) => {
    try {
        return await Audiovisual.findByPk(id,{
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
AudiovisualController.deletea = async (pId) => {
    try {
        return await Audiovisual.destroy({
            where: {
                id: pId
            }
        })
    } catch (error) {
        return error
    }
}
AudiovisualController.gets = async () => {
    try {
        return await Audiovisual.findAll({
            include: {
                all: true
            }
        })
    } catch (error) {
        return error
    }
}
AudiovisualController.create = async (pAudiovisual) => {
    try {
        return await Audiovisual.create(pAudiovisual)
    } catch (error) {
        return error
    }
}

AudiovisualController.update = async (pAudiovisual) => {
    try {
        return await Audiovisual.update(pAudiovisual,{
            where: {
                id: pAudiovisual.id
            }
        })
    } catch (error) {
        return error
    }
}

module.exports = AudiovisualController