import { userLogged } from "../types/userType";

export const UserSessionManager = () => {
    const getUser = (): userLogged | null => {
        const userStr = sessionStorage.getItem('user');
        if (userStr) {
            return JSON.parse(userStr);
        }
        return null;
    }
    
    const getToken = (): string => {
        return sessionStorage.getItem('token') || null;
    }
    
    const removeUserSession = (): void => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
    }
    
    const setUserSession = (token:string, user: userLogged): void => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user',JSON.stringify(user));
    }

    return { getUser, getToken, removeUserSession, setUserSession }
}
export default UserSessionManager;