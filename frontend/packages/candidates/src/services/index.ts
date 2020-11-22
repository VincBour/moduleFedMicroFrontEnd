import { userLogged, userType } from "../types/userType";

const baseUrl = "http://localhost:8080"; 

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

export default {
    LoginUser
}