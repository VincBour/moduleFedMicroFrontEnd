import { GET_REFERENTIAL_CONTRACTS_SUCCESS, GET_REFERENTIAL_FAILURE, GET_REFERENTIAL_PAYS_SUCCESS, GET_REFERENTIAL_SPECIALITE_SUCCESS, GET_VACANCIES_FAILURE, GET_VACANCIES_SUCCESS, GET_VACANCIES_TOP_FAILURE, GET_VACANCIES_TOP_SUCCESS } from "./action-types";
import { VacancyStateType } from "./type";
import { ActionErrorType, ActionReferentialType, ActionType, ActionVacanciesTopType } from "./vacancyContextProvider";

export const reducer = (state: VacancyStateType, action: ActionType): VacancyStateType => {
    switch(action.type){
        case GET_REFERENTIAL_PAYS_SUCCESS:
            return {...state, referential: {...state.referential, pays: (action as ActionReferentialType).payload.referentials}}
        
        case GET_REFERENTIAL_CONTRACTS_SUCCESS:
            return {...state, referential: {...state.referential, contracts: (action as ActionReferentialType).payload.referentials}}
        
        case GET_REFERENTIAL_SPECIALITE_SUCCESS:
            return {...state, referential: {...state.referential, specialite: (action as ActionReferentialType).payload.referentials}} 
            
        case GET_VACANCIES_TOP_SUCCESS: 
            return {...state, vacanciesTop: (action as ActionVacanciesTopType).payload.vacancies};
            
        case GET_VACANCIES_SUCCESS: 
            return {...state, vacancies: (action as ActionVacanciesTopType).payload.vacancies};
        
        case GET_REFERENTIAL_FAILURE: 
        case GET_VACANCIES_TOP_FAILURE: 
        case GET_VACANCIES_FAILURE: 
            return {...state, error: (action as ActionErrorType).payload.error}
        default:
            return state;
    }
}