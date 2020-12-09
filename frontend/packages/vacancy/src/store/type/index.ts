import { Referential } from "../../components/SelectField/type";
import { VacancyType } from "../../components/vacancies/type";

export type VacancyStateType = {
    referential: {
        pays: Referential[],
        contracts: Referential[],
        specialite: Referential[]
    },
    vacanciesTop: VacancyType[],
    vacancies: VacancyType[],
    error: string
}