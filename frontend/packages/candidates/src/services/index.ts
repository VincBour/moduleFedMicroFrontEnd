import { userLogged, userType } from "../types/userType";

const baseUrl = process.env.BACK_URL; 

const LoginUser = async (authModel: userType): Promise<userLogged> => {
    const myHeaders: Headers = new Headers();
    myHeaders.append('Content-Type','application/json');
    
    const myInit: RequestInit = {
        method: "POST",
        headers:myHeaders,
        body:JSON.stringify(authModel)
    }
    
    const response = await fetch(`${baseUrl}/api/authentication/signin`, myInit);

    if (response.status === 401) {
        return null;
    }

    return await response.json();
}

const RegisterUser = async (authModel: userType): Promise<any> => {
    const myHeaders: Headers = new Headers();
    myHeaders.append('Content-Type','application/json');
    
    const myInit: RequestInit = {
        method: "POST",
        headers:myHeaders,
        body:JSON.stringify(authModel)
    }
    const response = await fetch(`${baseUrl}/api/authentication/signup`, myInit);

    if (response.status === 401) {
        return null;
    }

    return await response.json();
}

export default {
    LoginUser,
    RegisterUser
}