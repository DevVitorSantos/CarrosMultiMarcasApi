import express from "express";
import { promises as fs } from 'fs'
import cors from 'cors'
import carrosRouter from './routes/carros.js'
import swaggerUi from 'swagger-ui-express'
import { swaggerDocument } from './doc.js'

//config express app
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use('/carros', carrosRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//destructuring and config filesystem variables
const { readFile, writeFile} = fs

//global db
global.myDb = 'car-list.json'

app.listen(3000, () => {
    console.log('startado ')
    onLoadServer()
    
})


//routes
app.get('/', (req, res) => {
    console.log('vindo da rota')
    res.end()
})

//provide a inicial seed to work
const onLoadServer = async()=>{
    try {
       console.log('servidor funcionando e preparado')
       
    } catch (error) {
        console.log(error)
    }
}