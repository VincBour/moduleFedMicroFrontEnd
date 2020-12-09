import { getRefContractMock } from "../../__mockData__/getRefContractMock";
import { getRefPaysMock } from "../../__mockData__/getRefPaysMock";
import { getRefSpecialitesMock } from "../../__mockData__/getRefSpecialitesMock";
import { getVacanciesMock } from "../../__mockData__/getVacanciesMock";
import { GET_REFERENTIAL_CONTRACTS_SUCCESS, GET_REFERENTIAL_FAILURE, GET_REFERENTIAL_PAYS_SUCCESS, GET_REFERENTIAL_SPECIALITE_SUCCESS, GET_VACANCIES_FAILURE, GET_VACANCIES_SUCCESS, GET_VACANCIES_TOP_FAILURE, GET_VACANCIES_TOP_SUCCESS } from "../action-types";
import { initialState } from "../initialState";
import { reducer } from "../reducer";

describe('vacancy-reducer', () => {
    it('should return initialState', () => {
        expect(initialState).toEqual({
            referential: {
                contracts: [],
                pays: [],
                specialite: []
            },
            vacancies: [],
            vacanciesTop: [],
            error: ''
        })
    });
    it('should set Referential pays When GET_REFERENTIAL_PAYS_SUCCESS is dispatch', () => {
        const upadateState = reducer(initialState, {type: GET_REFERENTIAL_PAYS_SUCCESS, payload: {
            referentials: getRefPaysMock()
        }});

        expect(upadateState).toEqual({
            ...initialState,
            referential: {
                ...initialState.referential,
                pays:getRefPaysMock()
            }
        })
    });
    it('should set Referential pays When GET_REFERENTIAL_CONTRACTS_SUCCESS is dispatch', () => {
        const upadateState = reducer(initialState, {type: GET_REFERENTIAL_CONTRACTS_SUCCESS, payload: {
            referentials: getRefContractMock()
        }});

        expect(upadateState).toEqual({
            ...initialState,
            referential: {
                ...initialState.referential,
                contracts:getRefContractMock()
            }
        })
    });
    it('should set Referential pays When GET_REFERENTIAL_SPECIALITE_SUCCESS is dispatch', () => {
        const upadateState = reducer(initialState, {type: GET_REFERENTIAL_SPECIALITE_SUCCESS, payload: {
            referentials: getRefSpecialitesMock()
        }});

        expect(upadateState).toEqual({
            ...initialState,
            referential: {
                ...initialState.referential,
                specialite:getRefSpecialitesMock()
            }
        })
    });
    it('should set Referential pays When GET_VACANCIES_SUCCESS is dispatch', () => {
        const upadateState = reducer(initialState, {type: GET_VACANCIES_SUCCESS, payload: {
            vacancies: getVacanciesMock()
        }});

        expect(upadateState).toEqual({
            ...initialState,
            vacancies: getVacanciesMock()
        })
    });
    it('should set Referential pays When GET_VACANCIES_TOP_SUCCESS is dispatch', () => {
        const upadateState = reducer(initialState, {type: GET_VACANCIES_TOP_SUCCESS, payload: {
            vacancies: getVacanciesMock()
        }});

        expect(upadateState).toEqual({
            ...initialState,
            vacanciesTop: getVacanciesMock()
        })
    });
    it('should update error When GET_REFERENTIAL_FAILURE is dispatch', () => {
        const error = new Error('FAILED');

        const upadateState = reducer(initialState, {type: GET_REFERENTIAL_FAILURE, payload: {
            error: error.message
        }});

        expect(upadateState).toEqual({
            ...initialState,
            error: 'FAILED'
        })
    });
    it('should update error When GET_VACANCIES_TOP_FAILURE is dispatch', () => {
        const error = new Error('FAILED');

        const upadateState = reducer(initialState, {type: GET_VACANCIES_TOP_FAILURE, payload: {
            error: error.message
        }});

        expect(upadateState).toEqual({
            ...initialState,
            error: 'FAILED'
        })
    });
    it('should update error When GET_VACANCIES_FAILURE is dispatch', () => {
        const error = new Error('FAILED');

        const upadateState = reducer(initialState, {type: GET_VACANCIES_FAILURE, payload: {
            error: error.message
        }});

        expect(upadateState).toEqual({
            ...initialState,
            error: 'FAILED'
        })
    });
});