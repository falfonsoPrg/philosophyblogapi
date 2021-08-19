const router = require('express').Router()
const ReseñaController = require('../controllers/ReseñaController')

router.get('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Resenias']
        #swagger.path = '/resenias/{id}'
        #swagger.description = 'Endpoint to get one Resenias'
     */
    const resp = await ReseñaController.get(req.params.id)
    if(resp){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found that Resenias"
    })
})

router.get('/', async (req,res)=>{
    /**
        #swagger.tags = ['Resenias']
        #swagger.path = '/resenias'
        #swagger.description = 'Endpoint to get all Resenias'
     */
    const resp = await ReseñaController.gets()
    if(resp.length > 0){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found any Resenias"
    })
})

router.post('/', async (req,res)=>{
    /**
        #swagger.tags = ['Resenias']
        #swagger.path = '/resenias'
        #swagger.description = 'Endpoint to create a Resenias'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Resenia'
            }
        }]
     */

    const resp = await ReseñaController.create(req.body)
    if(resp.errors || resp.name){
        return res.status(400).send({
            error: "Couldn't save the Resenias"
        })
    }
    return res.status(201).send()
})

router.put('/', async (req,res)=>{
    /**
        #swagger.tags = ['Resenias']
        #swagger.path = '/resenias'
        #swagger.description = 'Endpoint to update a Resenias'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Resenia'
            }
        }]
     */
    const resp = await ReseñaController.update(req.body);
    if(resp[0] == 0 || resp.name){
        return res.status(404).send({
            error: "Couldn't update the Resenias"
        })
    }
    return res.status(204).send()
})
router.delete('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Resenias']
        #swagger.path = '/resenias/{id}'
        #swagger.description = 'Endpoint to delete one resenias'
     */
    const resp = await ReseñaController.deletea(req.params.id)
    if(resp >= 1){
        return res.status(200).send()
    }
    return res.status(404).send({
        error: "Couldn't found that resenias"
    })
})

module.exports = router;