const router = require('express').Router()
const AudiovisualController = require('../controllers/AudiovisualController')

router.get('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Audiovisual']
        #swagger.path = '/audiovisuals/{id}'
        #swagger.description = 'Endpoint to get one Audiovisual'
     */
    const resp = await AudiovisualController.get(req.params.id)
    if(resp){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found that audiovisuals"
    })
})

router.get('/', async (req,res)=>{
    /**
        #swagger.tags = ['Audiovisual']
        #swagger.path = '/audiovisuals'
        #swagger.description = 'Endpoint to get all Audiovisual'
     */
    const resp = await AudiovisualController.gets()
    if(resp.length > 0){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found any audiovisuals"
    })
})

router.post('/', async (req,res)=>{
    /**
        #swagger.tags = ['Audiovisual']
        #swagger.path = '/audiovisuals'
        #swagger.description = 'Endpoint to create a Audiovisual'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Audiovisual'
            }
        }]
     */

    const resp = await AudiovisualController.create(req.body)
    if(resp.errors || resp.name){
        return res.status(400).send({
            error: "Couldn't save the audiovisuals"
        })
    }
    return res.status(201).send()
})

router.put('/', async (req,res)=>{
    /**
        #swagger.tags = ['Audiovisual']
        #swagger.path = '/audiovisuals'
        #swagger.description = 'Endpoint to update a Audiovisual'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Audiovisual'
            }
        }]
     */
    const resp = await AudiovisualController.update(req.body);
    if(resp[0] == 0 || resp.name){
        return res.status(404).send({
            error: "Couldn't update the audiovisuals"
        })
    }
    return res.status(204).send()
})

router.delete('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Audiovisual']
        #swagger.path = '/audiovisuals/{id}'
        #swagger.description = 'Endpoint to delete one Audiovisual'
     */
    const resp = await AudiovisualController.deletea(req.params.id)
    if(resp === 0){
        return res.status(404).send({
            error: "Couldn't found that audiovisuals"
        })
    }
    return res.status(204).send()
})

module.exports = router;