import { IUserRequest, IUserUpdateRequest } from '../interfaces'
import { User } from '../models/user'
import { hash } from 'bcrypt'


const createUserService = async ({ name, email, password, isAdm }: IUserRequest) => {

    const hashedPassword = await hash(password, 10)

    const user = {
        name,
        email,
        password: hashedPassword,
        isAdm
    }

    const newUser = await User.create(user)

    Reflect.deleteProperty(newUser, 'password')

    return newUser
}

const listUsersService = async () => await User.find()

const updateUserService = async (id: string, { name, email, password, isAdm }: IUserUpdateRequest) => {

    const user = await User.findById({ _id: id })

    if(!user) {

        throw new Error('user not found')
    }

    const newUser = {
        name: name ? name : user.name,
        email: email ? email : user.email,
        password: password ? await hash(password, 10) : user.password,
        isAdm: isAdm ? isAdm : user.isAdm,
    }
    
    await User.updateOne({ _id: user.id }, newUser)

    Reflect.deleteProperty(newUser, 'password')

    return newUser
}

const deleteUserService = async (id: string) => {

    const user = await User.findById({ _id: id })

    if(!user) {

        throw new Error('user not found')
    }

    await User.deleteOne({ _id: user.id })
}

export { createUserService, listUsersService, updateUserService, deleteUserService }
