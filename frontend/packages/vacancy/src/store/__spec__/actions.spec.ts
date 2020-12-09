import VacancyService from '../../services/index';
import { getRefContractMock } from '../../__mockData__/getRefContractMock';
import { getRefPaysMock } from '../../__mockData__/getRefPaysMock';
import { getRefSpecialitesMock } from '../../__mockData__/getRefSpecialitesMock';
import { getVacanciesMock } from '../../__mockData__/getVacanciesMock';
import { getVacanciesTopMock } from '../../__mockData__/getVacanciesTopMock';
import { GET_REFERENTIAL_CONTRACTS_SUCCESS, GET_REFERENTIAL_FAILURE, GET_REFERENTIAL_PAYS_SUCCESS, GET_REFERENTIAL_SPECIALITE_SUCCESS, GET_VACANCIES_FAILURE, GET_VACANCIES_SUCCESS, GET_VACANCIES_TOP_FAILURE, GET_VACANCIES_TOP_SUCCESS } from '../action-types';
import { getReferential, getVacancies, getVacanciesTop } from '../actions';

jest.mock('../../services/index')
describe('actions', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    describe('getReferential dispatch success', () => {
        beforeEach(() => {
            VacancyService.fetchReferentialPays = jest.fn().mockResolvedValue(getRefPaysMock());
            VacancyService.fetchReferentialSpecialite = jest.fn().mockResolvedValue(getRefSpecialitesMock());
            VacancyService.fetchReferentialContracts = jest.fn().mockResolvedValue(getRefContractMock());
        });
        it('should dispatch GET_REFERENTIAL_PAYS_SUCCESS', async () => {
            const dispatch = jest.fn();
            const func = await getReferential('Pays');
            await func(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_REFERENTIAL_PAYS_SUCCESS,
                payload: {
                    referentials: getRefPaysMock()
                }
            })
        });
        it('should dispatch GET_REFERENTIAL_CONTRACTS_SUCCESS', async () => {
            const dispatch = jest.fn();
            const func = await getReferential('Type de contrat');
            await func(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_REFERENTIAL_CONTRACTS_SUCCESS,
                payload: {
                    referentials: getRefContractMock()
                }
            })
        });
        it('should dispatch GET_REFERENTIAL_SPECIALITE_SUCCESS', async () => {
            const dispatch = jest.fn();
            const func = await getReferential('Specialite/emploi');
            await func(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_REFERENTIAL_SPECIALITE_SUCCESS,
                payload: {
                    referentials: getRefSpecialitesMock()
                }
            })
        });
    });
    describe('getReferential dispatch success', () => {
        const error = new Error('FAILED');
        beforeEach(() => {
            VacancyService.fetchReferentialPays = jest.fn().mockRejectedValue(error);
            VacancyService.fetchReferentialSpecialite = jest.fn().mockRejectedValue(error);
            VacancyService.fetchReferentialContracts = jest.fn().mockRejectedValue(error);
        });
        it('should dispatch GET_REFERENTIAL_FAILURE when call ref Pays', async () => {
            const dispatch = jest.fn();
            const func = await getReferential('Pays');
            await func(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_REFERENTIAL_FAILURE,
                payload: {
                    error: error.message
                }
            })
        });
        it('should dispatch GET_REFERENTIAL_FAILURE when call ref contract', async () => {
            const dispatch = jest.fn();
            const func = await getReferential('Type de contrat');
            await func(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_REFERENTIAL_FAILURE,
                payload: {
                    error: error.message
                }
            })
        });
        it('should dispatch GET_REFERENTIAL_FAILURE when call ref specialite', async () => {
            const dispatch = jest.fn();
            const func = await getReferential('Specialite/emploi');
            await func(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_REFERENTIAL_FAILURE,
                payload: {
                    error: error.message
                }
            })
        });
    });

    describe('getVacanciesTop', () => {
        it('should dispatch GET_VACANCIES_TOP_SUCCESS', async () => {
            VacancyService.fetchVacanciesTop = jest.fn().mockResolvedValue(getVacanciesTopMock());
            
            const dispatch = jest.fn();

            await getVacanciesTop(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_VACANCIES_TOP_SUCCESS,
                payload: {
                    vacancies: getVacanciesTopMock()
                }
            });
        });
        it('should dispatch GET_VACANCIES_TOP_FAILURE', async () => {
            const error = new Error('FAILED');

            VacancyService.fetchVacanciesTop = jest.fn().mockRejectedValue(error);
            
            const dispatch = jest.fn();

            await getVacanciesTop(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_VACANCIES_TOP_FAILURE,
                payload: {
                    error: error.message
                }
            });
        });
    });
    describe('getVacancies', () => {
        it('should dispatch GET_VACANCIES_SUCCESS', async () => {
            VacancyService.fetchVacancies = jest.fn().mockResolvedValue(getVacanciesMock());
            
            const dispatch = jest.fn();

            await getVacancies(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_VACANCIES_SUCCESS,
                payload: {
                    vacancies: getVacanciesMock()
                }
            });
        });
        it('should dispatch GET_VACANCIES_FAILURE', async () => {
            const error = new Error('FAILED');

            VacancyService.fetchVacancies = jest.fn().mockRejectedValue(error);
            
            const dispatch = jest.fn();

            await getVacancies(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: GET_VACANCIES_FAILURE,
                payload: {
                    error: error.message
                }
            });
        });
    });
});