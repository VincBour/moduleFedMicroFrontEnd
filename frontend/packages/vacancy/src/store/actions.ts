import { DispatchType } from "./vacancyProvider";
import VacancyService from '../services/index';
import { 
    GET_REFERENTIAL_FAILURE, 
    GET_REFERENTIAL_CONTRACTS_SUCCESS,  
    GET_REFERENTIAL_PAYS_SUCCESS, 
    GET_REFERENTIAL_SPECIALITE_SUCCESS, 
    GET_VACANCIES_TOP_SUCCESS,
    GET_VACANCIES_TOP_FAILURE,
    GET_VACANCIES_SUCCESS,
    GET_VACANCIES_FAILURE} from "./action-types";
import { Referential } from "../components/SelectField/type";
import { VacancyType } from "../components/vacancies/type";

const getReferentialPays = async (dispatch: DispatchType): Promise<void> => {
    try {
        const referentials: Referential[] = await VacancyService.fetchReferentialPays();
        dispatch({ type: GET_REFERENTIAL_PAYS_SUCCESS, payload: { referentials }});
    }catch (error) {
        dispatch({ type: GET_REFERENTIAL_FAILURE, payload: { error: error.message }});
    }
}

const getReferentialContracts = async (dispatch: DispatchType): Promise<void> => {
    try {
        const referentials: Referential[] = await VacancyService.fetchReferentialContracts()
        dispatch({ type: GET_REFERENTIAL_CONTRACTS_SUCCESS, payload: { referentials }});
    }catch (error) {
        dispatch({ type: GET_REFERENTIAL_FAILURE, payload: { error: error.message }});
    }
}

const getReferentialSpecialite = async (dispatch: DispatchType): Promise<void> => {
    try {
        const referentials: Referential[] = await VacancyService.fetchReferentialSpecialite()
        dispatch({ type: GET_REFERENTIAL_SPECIALITE_SUCCESS, payload: { referentials }});
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

export const getVacanciesTop = async (dispatch: DispatchType): Promise<void> => {
    try {
        const vacancies: VacancyType[] = await VacancyService.fetchVacanciesTop();
        dispatch({ type: GET_VACANCIES_TOP_SUCCESS, payload: { vacancies }});
    }catch (error) {
        dispatch({ type: GET_VACANCIES_TOP_FAILURE, payload: { error: error.message }});
    }
}

export const getVacancies = async (dispatch: DispatchType): Promise<void> => {
    try {
        const vacancies: VacancyType[] = await VacancyService.fetchVacancies();
        dispatch({ type: GET_VACANCIES_SUCCESS, payload: { vacancies }});
    }catch (error) {
        dispatch({ type: GET_VACANCIES_FAILURE, payload: { error: error.message }});
    }
}