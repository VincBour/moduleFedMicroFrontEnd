import { GET_REFERENTIAL_CONTRACTS_SUCCES, GET_REFERENTIAL_FAILURE, GET_REFERENTIAL_PAYS_SUCCES, GET_REFERENTIAL_SPECIALITE_SUCCES } from "./action-types";
import { ActionErrorType, ActionReferentialType, ActionType, VacancyStateType } from "./vacancyProvider";

export const reducer = (state: VacancyStateType, action: ActionType): VacancyStateType => {
    switch(action.type){
        case GET_REFERENTIAL_PAYS_SUCCES:
            return {...state, referential: {...state.referential, pays: (action as ActionReferentialType).payload.referentials}}
        case GET_REFERENTIAL_CONTRACTS_SUCCES:
            return {...state, referential: {...state.referential, contracts: (action as ActionReferentialType).payload.referentials}}
        case GET_REFERENTIAL_SPECIALITE_SUCCES:
            return {...state, referential: {...state.referential, specialite: (action as ActionReferentialType).payload.referentials}} 
        case GET_REFERENTIAL_FAILURE: {
            return {...state, error: (action as ActionErrorType).payload.error}
        }
        default:
            return state;
    }
}