interface IUserRequest {
    name: string
    email: string
    password: string
    isAdm: boolean
}

interface IUserUpdateRequest {
    name?: string
    email?: string
    password?: string
    isAdm?: boolean
}

export { IUserRequest, IUserUpdateRequest }
