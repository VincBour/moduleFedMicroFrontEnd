export type userType = {
    name?: string,
    email:string,
    password:string
};

export type userLogged = {
    id: string,
    name: string,
    email: string,
    token: string,
}