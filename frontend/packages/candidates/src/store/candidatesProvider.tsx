import * as React from 'react';
import { reducer } from './reducer';

export type CandidatesStateType = {
    error: string
}

export type ActionErrorType = { type: string, payload: {error: string}}
export type ActionType = {
    type: string
} |  ActionErrorType

// Type defined for dispatch
export type DispatchType = (action: ActionType) => void;
// Type defined for Provider
export type CandidatesProviderType = { children: React.ReactNode, initialState: CandidatesStateType };

const CandidatesContext = React.createContext<CandidatesStateType | undefined>(undefined);
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

export { CandidatesProvider, useCandidatesState, useCandidatesDispatch };