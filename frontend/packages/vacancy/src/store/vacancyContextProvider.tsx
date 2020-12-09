import * as React from 'react';
import { Referential } from '../components/SelectField/type';
import { VacancyType } from '../components/vacancies/type';
import { GET_REFERENTIAL_PAYS_SUCCESS, GET_REFERENTIAL_CONTRACTS_SUCCESS, GET_REFERENTIAL_SPECIALITE_SUCCESS, GET_REFERENTIAL_FAILURE, GET_VACANCIES_FAILURE, GET_VACANCIES_SUCCESS, GET_VACANCIES_TOP_FAILURE, GET_VACANCIES_TOP_SUCCESS } from './action-types';
import { reducer } from './reducer';
import { VacancyStateType } from './type';

type ActionMap<M extends {[index:string] :any}> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type:Key;
            payload: M[Key];
        }
}

export type VacancyActionPayload = {
    [GET_VACANCIES_TOP_SUCCESS]: { vacancies: VacancyType[] },
    [GET_VACANCIES_SUCCESS]: { vacancies: VacancyType[] },
    [GET_REFERENTIAL_PAYS_SUCCESS]: { referentials: Referential[] },
    [GET_REFERENTIAL_CONTRACTS_SUCCESS]: { referentials: Referential[] },
    [GET_REFERENTIAL_SPECIALITE_SUCCESS]: { referentials: Referential[] },
    [GET_VACANCIES_TOP_FAILURE]: { error: string},
    [GET_VACANCIES_FAILURE]: { error: string},
    [GET_REFERENTIAL_FAILURE]: { error: string},
}

export type ActionType = ActionMap<VacancyActionPayload>[keyof ActionMap<VacancyActionPayload>]

export type DispatchType = (action: ActionType) => void;

export type VacancyProviderType = { children: React.ReactNode, initialState: VacancyStateType };

const VacancyContext = React.createContext<VacancyStateType | undefined>(undefined);
const VacancyDispatch = React.createContext<DispatchType | undefined>(undefined)

const VacancyContextProvider = ({initialState, children}: VacancyProviderType) => {
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

export { VacancyContextProvider, useVacancyState, useVacancyDispatch };