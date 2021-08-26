const router = require('express').Router()
const ComentarionController = require('../controllers/ComentarionController')

router.get('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Comentarios']
        #swagger.path = '/comentarios/{id}'
        #swagger.description = 'Endpoint to get one comentarios'
     */
    const resp = await ComentarionController.get(req.params.id)
    if(resp){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found that comentarios"
    })
})

router.get('/', async (req,res)=>{
    /**
        #swagger.tags = ['Comentarios']
        #swagger.path = '/comentarios'
        #swagger.description = 'Endpoint to get all comentarios'
     */
    const resp = await ComentarionController.gets()
    if(resp.length > 0){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found any comentarios"
    })
})

router.post('/', async (req,res)=>{
    /**
        #swagger.tags = ['Comentarios']
        #swagger.path = '/comentarios'
        #swagger.description = 'Endpoint to create a comentarios'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Comentario'
            }
        }]
     */

    const resp = await ComentarionController.create(req.body)
    if(resp.errors || resp.name){
        return res.status(400).send({
            error: "Couldn't save the comentarios"
        })
    }
    return res.status(201).send()
})

router.put('/', async (req,res)=>{
    /**
        #swagger.tags = ['Comentarios']
        #swagger.path = '/comentarios'
        #swagger.description = 'Endpoint to update a comentarios'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Comentario'
            }
        }]
     */
    const resp = await ComentarionController.update(req.body);
    if(resp[0] == 0 || resp.name){
        return res.status(404).send({
            error: "Couldn't update the comentarios"
        })
    }
    return res.status(204).send()
})

router.delete('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Comentarios']
        #swagger.path = '/comentarios/{id}'
        #swagger.description = 'Endpoint to delete one comentarios'
     */
    const resp = await ComentarionController.deletea(req.params.id)
    if(resp >= 1){
        return res.status(200).send()
    }
    return res.status(404).send({
        error: "Couldn't found that comentarios"
    })
})


module.exports = router;