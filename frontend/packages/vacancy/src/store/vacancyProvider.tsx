import * as React from 'react';
import { Referential } from "../components/SelectField/SelectField";
import { reducer } from './reducer';

export type VacancyStateType = {
    referential: {
        pays: Referential[],
        contracts: Referential[],
        specialite: Referential[]
    },
    error: string
}

export type ActionReferentialType = { type: string, payload: { referentials: Referential[]}}
export type ActionErrorType = { type: string, payload: {error: string}}
export type ActionType = {
    type: string
} | ActionReferentialType | ActionErrorType

// Type defined for dispatch
export type DispatchType = (action: ActionType) => void;
// Type defined for Provider
export type VacancyProviderType = { children: React.ReactNode, initialState: VacancyStateType };

const VacancyContext = React.createContext<VacancyStateType | undefined>(undefined);
const VacancyDispatch = React.createContext<DispatchType | undefined>(undefined)

const VacancyProvider = ({initialState, children}: VacancyProviderType) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <VacancyContext.Provider value={state}>
            <VacancyDispatch.Provider value={dispatch}>
                {children}
            </VacancyDispatch.Provider>
        </VacancyContext.Provider>
    );
};

const useVacancyState = () => {
    const context = React.useContext(VacancyContext);

    if (context === undefined) {
        throw new Error('useVacancyState must be used within a VacancyProvider');
    }

    return context;
};

const useVacancyDispatch = () => {
    const context = React.useContext(VacancyDispatch);

    if (context === undefined) {
        throw new Error('useVacancyDispatch must be used within a VacancyProvider');
    }

    return context;
};

export { VacancyProvider, useVacancyState, useVacancyDispatch };