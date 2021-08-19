const router = require('express').Router()
const GlosarioController = require('../controllers/GlosarioController')

router.get('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Glosarios']
        #swagger.path = '/glosarios/{id}'
        #swagger.description = 'Endpoint to get one glosario'
     */
    const resp = await GlosarioController.get(req.params.id)
    if(resp){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found that glosario"
    })
})

router.get('/', async (req,res)=>{
    /**
        #swagger.tags = ['Glosarios']
        #swagger.path = '/glosarios'
        #swagger.description = 'Endpoint to get all glosarios'
     */
    const resp = await GlosarioController.gets()
    if(resp.length > 0){
        return res.status(200).send({
            response: resp
        })
    }
    return res.status(404).send({
        error: "Couldn't found any glosarios"
    })
})

router.post('/', async (req,res)=>{
    /**
        #swagger.tags = ['Glosarios']
        #swagger.path = '/glosarios'
        #swagger.description = 'Endpoint to create a glosarios'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Glosario'
            }
        }]
     */

    const resp = await GlosarioController.create(req.body)
    if(resp.errors || resp.name){
        return res.status(400).send({
            error: "Couldn't save the Glosario"
        })
    }
    return res.status(201).send()
})

router.put('/', async (req,res)=>{
    /**
        #swagger.tags = ['Glosarios']
        #swagger.path = '/glosarios'
        #swagger.description = 'Endpoint to update a glosarios'
        #swagger.parameters = [{
            description: 'description',
            in:'body',
            required: true,
            name: 'body',
            schema: {
                $ref: '#/definitions/Glosario'
            }
        }]
     */
    const resp = await GlosarioController.update(req.body);
    if(resp[0] == 0 || resp.name){
        return res.status(404).send({
            error: "Couldn't update the glosarios"
        })
    }
    return res.status(204).send()
})

router.delete('/:id', async (req,res)=>{
    /**
        #swagger.tags = ['Glosarios']
        #swagger.path = '/glosarios/{id}'
        #swagger.description = 'Endpoint to delete one glosarios'
     */
    const resp = await GlosarioController.deletea(req.params.id)
    if(resp >= 1){
        return res.status(200).send()
    }
    return res.status(404).send({
        error: "Couldn't found that glosarios"
    })
})
module.exports = router;