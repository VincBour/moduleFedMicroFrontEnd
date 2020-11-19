import { IVacancyDoc, VacancyModel, VacancyType } from '../Model/VacancyModel';
import { vacancyDAL } from '../DAL/vacancyDAL';

const createVacancy = async (item: VacancyType): Promise<IVacancyDoc> => {
    const vacancy = new VacancyModel(item);
    
    const result = await vacancyDAL.createVacancy(vacancy);
    return result;
}

const findAllVacancy = async (): Promise<IVacancyDoc[]> => {
    const result = await vacancyDAL.findAllVacancy();
    return result;
}
const findAllVacanciesTop = async (references: string[]): Promise<IVacancyDoc[]> => {
    const result = await vacancyDAL.findAllVacanciesTop(references);
    return result;
}

const findOneVacancy = async (id: string) : Promise<IVacancyDoc | null> => {
    const result = await vacancyDAL.findOneVacancy(id);
    return result;
} 

export const vacancyService= {
    createVacancy,
    findAllVacancy,
    findOneVacancy,
    findAllVacanciesTop
}