import { userLogged, userType } from "../types/userType";
import { getLoginUserFailure, getLoginUserRequest, getLoginUserSuccess } from "./actionCreator";
import { DispatchType } from "./candidatesProvider";
import CandidatesServices from '../services/index';

export const getLogin = async (dispatch: DispatchType, user: userType): Promise<userLogged> => {
    dispatch(getLoginUserRequest());
    try{
        const result =  await CandidatesServices.LoginUser(user);
        dispatch(getLoginUserSuccess());
        return result;
    }catch(error){
        dispatch(getLoginUserFailure(error));
    }
}