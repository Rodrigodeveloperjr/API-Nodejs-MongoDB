import { IUserRequest } from '../interfaces'
import mongoose, { Schema } from 'mongoose'


const userSchema = new Schema<IUserRequest>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdm: { type: Boolean, required: true }
})

const User = mongoose.model<IUserRequest>('User', userSchema)

export { User }
