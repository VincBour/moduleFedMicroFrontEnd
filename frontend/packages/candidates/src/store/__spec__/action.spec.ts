import { DispatchType } from "../../context/CandidatesProvider";
import { getLoginUserFailure, getLoginUserRequest, getLoginUserSuccess, getRegisterUserFailure, getRegisterUserRequest, getRegisterUserSuccess } from "../actionCreator";
import { getLogin, getRegister } from "../actions";
import CandidatesServices from '../../services/index';

jest.mock('../../services/index');

describe('actions', () => {
    describe('getLogin', () => {
        let dispatch: DispatchType;
        const user = {
            name: 'Rocky',
            email: 'rBalboa@g.com',
            password: 'balboa'
        }
        beforeEach(() => {
            dispatch = jest.fn();
        });
        afterEach(() => {
            jest.clearAllMocks();
        });
        it('should dispatch GET_LOGIN_USER_REQUEST ', async () => {
            await getLogin(dispatch,user);

            expect(dispatch).toHaveBeenCalledWith(getLoginUserRequest());
        });
        it('should dispatch GET_LOGIN_USER_SUCCESS ', async () => {
            (CandidatesServices.LoginUser as jest.Mock).mockReturnValue({});
            await getLogin(dispatch,user);

            expect(dispatch).toHaveBeenCalledWith(getLoginUserSuccess());
        });
        it('should dispatch GET_LOGIN_USER_FAILURE ', async () => {
            const error = new Error('FAILED');
            (CandidatesServices.LoginUser as jest.Mock).mockRejectedValue(error);
            await getLogin(dispatch,user);

            expect(dispatch).toHaveBeenCalledWith(getLoginUserFailure(error.message));
        });
    });
    describe('getRegister', () => {
        let dispatch: DispatchType;
        const user = {
            name: 'Rocky',
            email: 'rBalboa@g.com',
            password: 'balboa'
        }
        beforeEach(() => {
            dispatch = jest.fn();
        });
        afterEach(() => {
            jest.clearAllMocks();
        });
        it('should dispatch GET_SIGN_USER_REQUEST ', async () => {
            await getRegister(dispatch,user);

            expect(dispatch).toHaveBeenCalledWith(getRegisterUserRequest());
        });
        it('should dispatch GET_SIGN_USER_SUCCESS ', async () => {
            (CandidatesServices.RegisterUser as jest.Mock).mockReturnValue({});
            await getRegister(dispatch,user);

            expect(dispatch).toHaveBeenCalledWith(getRegisterUserSuccess());
        });
        it('should dispatch GET_SIGN_USER_FAILURE ', async () => {
            const error = new Error('FAILED');
            (CandidatesServices.RegisterUser as jest.Mock).mockRejectedValue(error);
            await getRegister(dispatch,user);

            expect(dispatch).toHaveBeenCalledWith(getRegisterUserFailure(error.message));
        });
    });
});