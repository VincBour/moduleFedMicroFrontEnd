import { repository } from "../../utils/dataBase/Repository"
import { APPLICANT, ApplicantSchema } from "../Model/ApplicantModel";

const createApplicant = repository.create(APPLICANT, ApplicantSchema);

export const applicantRepository = {
    createApplicant
}