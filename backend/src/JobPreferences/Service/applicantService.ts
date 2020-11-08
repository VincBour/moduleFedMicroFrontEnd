import { IApplicantDoc, ApplicantModel, ApplicantType } from '../Model/applicantModel';
import { applicantDAL } from '../DAL/applicantDAL';

const createApplicant = async (item: ApplicantType): Promise<IApplicantDoc> => {
    const applicant = new ApplicantModel(item);
    const result = await applicantDAL.createApplicant(applicant);
    return result;
}

export const applicantService= {
    createApplicant
}