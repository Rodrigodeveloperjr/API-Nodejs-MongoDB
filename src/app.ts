import { handleErrorMiddleware } from './middlewares/handleError.middleware'
import { appRoutes } from './routes'
import mongoose from 'mongoose'
import express from 'express'
import 'express-async-errors'
import 'dotenv/config'


const app = express()

app.use(express.json())

appRoutes(app)

app.use(handleErrorMiddleware)

mongoose.connect(`mongodb+srv://${ process.env.USER_MONGODB }:${ process.env.PASSWORD_MONGODB }@apicluster.8ltxv6y.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {

    console.log('Conectado ao Mongo DB')

    app.listen(3000)
})
.catch(err => console.error(err))
