import { VacancyStateType } from "./type";


export const initialState: VacancyStateType = {
    referential: {
        contracts: [],
        pays: [],
        specialite: []
    },
    vacancies: [],
    vacanciesTop: [],
    error: ''
  }