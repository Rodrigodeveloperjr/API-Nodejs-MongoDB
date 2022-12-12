import { createUserService, listUsersService, updateUserService, deleteUserService } from '../services/index.service'
import { IUserRequest, IUserUpdateRequest } from '../interfaces'
import { Request, Response } from 'express'


const createUserController = async (req: Request, res: Response) => {

    const data: IUserRequest = req.body

    const newUser = await createUserService(data)

    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) => {

    const users = await listUsersService()

    return res.json(users)
}

const updateUserController = async (req: Request, res: Response) => {

    const id: string = req.params.id

    const data: IUserUpdateRequest = req.body

    const updatedUser = await updateUserService(id, data)

    return res.json(updatedUser)
}

const deleteUserController = async (req: Request, res: Response) => {

    const id: string = req.params.id
    
    await deleteUserService(id)

    return res.status(204).json()
}

export { createUserController, listUsersController, updateUserController, deleteUserController }
