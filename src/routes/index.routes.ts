import { Router } from 'express'

import { createUserController, listUsersController, updateUserController, deleteUserController } from '../controllers/index.controller'

import { schemaValidationMiddleware } from '../middlewares/schemaValidation.middleware'

import { userSchema } from '../schemas/user.schema'


const routes = Router()

const userRoutes = () => {

    routes.post('', schemaValidationMiddleware(userSchema), createUserController)

    routes.get('', listUsersController)

    routes.patch('/:id', updateUserController)

    routes.delete('/:id', deleteUserController)

    return routes
}

export { userRoutes }
