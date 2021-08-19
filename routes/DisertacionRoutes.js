const router = require('express').Router()
const DisertacionController = require('../controllers/DisertacionController')

router.get('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Disertacions']
        #swagger.path = '/disertacions/{id}'
        #swagger.description = 'Endpoint to get one Disertacions'
     */
    const resp = await DisertacionController.get(req.params.id)
    if(resp){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found that Disertacions"
    })
})

router.get('/', async (req,res)=>{
    /**
        #swagger.tags = ['Disertacions']
        #swagger.path = '/disertacions'
        #swagger.description = 'Endpoint to get all Disertacions'
     */
    const resp = await DisertacionController.gets()
    if(resp.length > 0){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found any Disertacions"
    })
})

router.post('/', async (req,res)=>{
    /**
        #swagger.tags = ['Disertacions']
        #swagger.path = '/disertacions'
        #swagger.description = 'Endpoint to create a Disertacions'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Disertacion'
            }
        }]
     */

    const resp = await DisertacionController.create(req.body)
    if(resp.errors || resp.name){
        return res.status(400).send({
            error: "Couldn't save the Disertacions"
        })
    }
    return res.status(201).send()
})

router.put('/', async (req,res)=>{
    /**
        #swagger.tags = ['Disertacions']
        #swagger.path = '/disertacions'
        #swagger.description = 'Endpoint to update a Disertacions'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Disertacion'
            }
        }]
     */
    const resp = await DisertacionController.update(req.body);
    if(resp[0] == 0 || resp.name){
        return res.status(404).send({
            error: "Couldn't update the Disertacions"
        })
    }
    return res.status(204).send()
})

router.delete('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Disertacions']
        #swagger.path = '/disertacions/{id}'
        #swagger.description = 'Endpoint to delete one disertacions'
     */
    const resp = await DisertacionController.deletea(req.params.id)
    if(resp >= 1){
        return res.status(200).send()
    }
    return res.status(404).send({
        error: "Couldn't found that disertacions"
    })
})


module.exports = router;