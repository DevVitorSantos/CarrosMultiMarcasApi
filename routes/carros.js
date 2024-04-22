import express from "express";
import { promises as fs} from 'fs'
import util from '../resources/util.js'

//destructuring
const { readFile, writeFile} = fs

const router = express.Router()

//routes

router.get('/' , async(req, res, next) => {
    res.send('/carros/')
})

router.get('/marcas/maisModelos', async(req, res , next) => {

    try {
        
        const data = JSON.parse(await readFile(myDb))
        res.send(util.marcasComMaisModelos(data))

    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.get('/marcas/menosModelos', async(req, res , next) => {

    try {
        
        const data = JSON.parse(await readFile(myDb))
        res.send(util.marcaComMenosModelos(data))

    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.get('/marcas/listaMaisModelos/:id', async(req, res , next) => {

    try {
        const paramReq = parseInt(req.params.id)
        const data = JSON.parse(await readFile(myDb))
        res.send(util.listaMaisModelos(data, paramReq))

    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.get('/marcas/listaMenosModelos/:id', async(req, res , next) => {

    try {
        const paramReq = parseInt(req.params.id)
        const data = JSON.parse(await readFile(myDb))
        res.send(util.listaMenosModelos(data, paramReq))

    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.post('/marcas/listaModelos', async(req, res , next) => {

    try {
        const paramReq = req.body
        
        const data = JSON.parse(await readFile(myDb))
        res.send(util.listaModelosPorMarca(data, paramReq.marca))
        
    } catch (err) {
        console.log(err)
        next(err)
    }
})



router.use((err, req, res, next) => {
    console.log(err)
    res.status(400).send({ error: err.message})
})

export default router