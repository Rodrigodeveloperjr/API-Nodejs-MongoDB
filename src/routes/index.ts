import { Express } from 'express'

import { userRoutes } from './index.routes'


const appRoutes = (app: Express) => {

    app.use('/users', userRoutes())
}

export { appRoutes }
