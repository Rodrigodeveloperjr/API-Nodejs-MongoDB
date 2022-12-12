import { IUserRequest } from '../interfaces'
import { SchemaOf } from 'yup'
import * as yup from 'yup'


const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
    
    name: yup.string().required('Name required'),
    email: yup.string().required('Email required').email('invalid email'),
    password: yup.string().required('Password required').min(8, 'minimum 8 characters'),
    isAdm: yup.boolean().required('IsAdm required'),
})

export { userSchema }
