import { Referential } from "../components/SelectField/SelectField";
import { DispatchType } from "./vacancyProvider";
import VacancyService from '../services/index';
import { 
    GET_REFERENTIAL_FAILURE, 
    GET_REFERENTIAL_CONTRACTS_SUCCES,  
    GET_REFERENTIAL_PAYS_SUCCES, 
    GET_REFERENTIAL_SPECIALITE_SUCCES } from "./action-types";

const getReferentialPays = async (dispatch: DispatchType): Promise<void> => {
    try {
        const referentials: Referential[] = await VacancyService.fetchReferentialPays();
        dispatch({ type: GET_REFERENTIAL_PAYS_SUCCES, payload: { referentials }});
    }catch (error) {
        dispatch({ type: GET_REFERENTIAL_FAILURE, payload: { error: error.message }});
    }
}

const getReferentialContracts = async (dispatch: DispatchType): Promise<void> => {
    try {
        const referentials: Referential[] = await VacancyService.fetchReferentialContracts()
        dispatch({ type: GET_REFERENTIAL_CONTRACTS_SUCCES, payload: { referentials }});
    }catch (error) {
        dispatch({ type: GET_REFERENTIAL_FAILURE, payload: { error: error.message }});
    }
}

const getReferentialSpecialite = async (dispatch: DispatchType): Promise<void> => {
    try {
        const referentials: Referential[] = await VacancyService.fetchReferentialSpecialite()
        dispatch({ type: GET_REFERENTIAL_SPECIALITE_SUCCES, payload: { referentials }});
    }catch (error) {
        dispatch({ type: GET_REFERENTIAL_FAILURE, payload: { error: error.message }});
    }
}

export const getReferential = (name: string) => {
    const mapping: {[key: string]: (dispatch: DispatchType) => Promise<void>} = {
        ['Pays']: getReferentialPays,
        ['Specialite/emploi']: getReferentialContracts,
        ['Type de contrat']: getReferentialSpecialite
    }
    return mapping[name];
} 