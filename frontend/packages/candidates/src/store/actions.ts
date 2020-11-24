import { userLogged, userType } from "../types/userType";
import { getLoginUserFailure, getLoginUserRequest, getLoginUserSuccess, getRegisterUserFailure, getRegisterUserRequest, getRegisterUserSuccess } from "./actionCreator";
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

export const getRegister = async (dispatch: DispatchType, user: userType): Promise<any> => {
    dispatch(getRegisterUserRequest());
    try{
        const result = await CandidatesServices.RegisterUser(user);
        dispatch(getRegisterUserSuccess());
        return result;
    } catch (error) {
        dispatch(getRegisterUserFailure(error));
    }
}