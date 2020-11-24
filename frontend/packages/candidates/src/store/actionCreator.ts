import { GET_LOGIN_USER_REQUEST, GET_LOGIN_USER_SUCCESS, GET_LOGIN_USER_FAILURE, GET_SIGN_OUT_USER, GET_SIGN_USER_REQUEST, GET_SIGN_USER_SUCCESS, GET_SIGN_USER_FAILURE } from "./action-types"
import { ActionType } from "./candidatesProvider";


export const getLoginUserRequest = (): ActionType => { 
    return { 
        type: GET_LOGIN_USER_REQUEST 
    } 
};

export const getLoginUserSuccess = (): ActionType => { 
    return { 
        type: GET_LOGIN_USER_SUCCESS
    } 
};

export const getLoginUserFailure = (error: string): ActionType => { 
    return { 
        type: GET_LOGIN_USER_FAILURE, 
        payload: { error } 
    } 
};

export const getSignOutUser = (): ActionType => {
    return {
        type: GET_SIGN_OUT_USER,
    }
}

export const getRegisterUserRequest = (): ActionType => {
    return {
        type: GET_SIGN_USER_REQUEST
    }
}

export const getRegisterUserSuccess = (): ActionType => {
    return {
        type: GET_SIGN_USER_SUCCESS
    }
}

export const getRegisterUserFailure = (error: string): ActionType => {
    return {
        type: GET_SIGN_USER_FAILURE,
        payload: { error }
    }
}