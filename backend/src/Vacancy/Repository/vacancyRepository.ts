import { repository } from "../../utils/dataBase/Repository"
import { VACANCY, VacancySchema } from "../Model/VacancyModel";

const createVacancy = repository.create(VACANCY, VacancySchema);

const findAllVacancy = repository.find(VACANCY, VacancySchema);

const findOneVacancy = repository.findOne(VACANCY, VacancySchema);

export const vacancyRepository = {
    createVacancy,
    findAllVacancy,
    findOneVacancy
}