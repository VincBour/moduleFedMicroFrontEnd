import { IVacancyDoc } from "../Model/VacancyModel";
import { vacancyRepository } from "../Repository/vacancyRepository";

const createVacancy = async (item: IVacancyDoc): Promise<IVacancyDoc> => {
    const result = await vacancyRepository.createVacancy(item);
    return result;
};

const findAllVacancy = async (): Promise<IVacancyDoc[]> => {
    const result = await vacancyRepository.findAllVacancy<IVacancyDoc>();
    return result;
}

const findOneVacancy = async (id: string): Promise<IVacancyDoc | null> => {
    const result = await vacancyRepository.findOneVacancy<IVacancyDoc>(id);
    return result;
}

export const vacancyDAL = {
    createVacancy,
    findAllVacancy,
    findOneVacancy
}

