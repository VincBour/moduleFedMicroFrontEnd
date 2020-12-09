import * as React from 'react';
import { ActionMap } from '../../../shared/utils/ActionMap';
import { userLogged } from '../types/userType';
import { GET_LOGIN_USER_REQUEST, GET_LOGIN_USER_SUCCESS, GET_LOGIN_USER_FAILURE, GET_SIGN_USER_SUCCESS, GET_SIGN_USER_REQUEST, GET_SIGN_USER_FAILURE, GET_SIGN_OUT_USER } from '../store/action-types';
import { reducer } from '../store/reducer';

export type CandidatesStateType = {
    authentication: {
        isRequestSend: boolean;
        error: string;
        loading: boolean;
    }
    error: string,
    session: {
        getUser: () => userLogged | null,
        getToken: () => string,
        removeUserSession: () => void,
        setUserSession: (token:string, user: userLogged) => void
    }
}

export type CandidatesActionPayload = {
    [GET_LOGIN_USER_REQUEST]: undefined,
    [GET_LOGIN_USER_SUCCESS]: undefined,
    [GET_LOGIN_USER_FAILURE]: {error: string},
    [GET_SIGN_USER_REQUEST]: undefined,
    [GET_SIGN_USER_SUCCESS]:undefined,
    [GET_SIGN_USER_FAILURE]: {error: string},
    [GET_SIGN_OUT_USER]: undefined
}

export type ActionType = ActionMap<CandidatesActionPayload>[keyof ActionMap<CandidatesActionPayload>];

export type DispatchType = (action: ActionType) => void;

export type CandidatesProviderType = { children: React.ReactNode, initialState: CandidatesStateType };

export const CandidatesContext = React.createContext<CandidatesStateType | undefined>(undefined);
const CandidatesDispatch = React.createContext<DispatchType | undefined>(undefined)

const CandidatesProvider = ({initialState, children}: CandidatesProviderType) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <CandidatesContext.Provider value={state}>
            <CandidatesDispatch.Provider value={dispatch}>
                {children}
            </CandidatesDispatch.Provider>
        </CandidatesContext.Provider>
    );
};

const useCandidatesState = () => {
    const context = React.useContext(CandidatesContext);

    if (context === undefined) {
        throw new Error('useCandidatesState must be used within a CandidatesProvider');
    }

    return context;
};

const useCandidatesDispatch = () => {
    const context = React.useContext(CandidatesDispatch);

    if (context === undefined) {
        throw new Error('useCandidatesDispatch must be used within a CandidatesProvider');
    }

    return context;
};

export { CandidatesProvider, useCandidatesDispatch, useCandidatesState };