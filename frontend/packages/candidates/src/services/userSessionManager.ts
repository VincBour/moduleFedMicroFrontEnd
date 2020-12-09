import { userLogged } from "../types/userType";

export const getUser = (): userLogged | null => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) {
        return JSON.parse(userStr);
    }
    return null;
}

export const getToken = (): string => {
    return sessionStorage.getItem('token') || null;
}

export const removeUserSession = (): void => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
}

export const setUserSession = (token: string, user: userLogged): void => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}
