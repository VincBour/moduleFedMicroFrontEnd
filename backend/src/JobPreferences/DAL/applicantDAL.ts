import { IApplicantDoc } from "../Model/ApplicantModel";
import { applicantRepository } from "../Repository/applicantRepository";

const createApplicant = async (item: IApplicantDoc) => {
    const result = await applicantRepository.createApplicant(item);
    return result;
};

export const applicantDAL = {
    createApplicant
}

