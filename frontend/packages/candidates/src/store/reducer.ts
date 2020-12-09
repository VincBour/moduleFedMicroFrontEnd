import { GET_LOGIN_USER_FAILURE, GET_LOGIN_USER_REQUEST, GET_LOGIN_USER_SUCCESS, GET_SIGN_OUT_USER } from "./action-types";
import { ActionType, CandidatesStateType } from "../context/CandidatesProvider";

export const reducer = (state: CandidatesStateType, action: ActionType): CandidatesStateType => {
    
    switch(action.type){
        case GET_LOGIN_USER_REQUEST:{
            return {...state, authentication: {...state.authentication, isRequestSend: true}}
        }
        case GET_LOGIN_USER_SUCCESS: {
            return {...state, authentication: {...state.authentication, isRequestSend: false, loading: true}}
        }
        case GET_LOGIN_USER_FAILURE: {
            return {...state, authentication: {...state.authentication, isRequestSend: false, error: action.payload.error}}
        }
        case GET_SIGN_OUT_USER: {
            return {...state, authentication: {...state.authentication, loading: false}}
        }
        default:
            return state;
    }
}