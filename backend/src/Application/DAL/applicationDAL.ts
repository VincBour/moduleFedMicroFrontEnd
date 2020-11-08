import { IApplicationDoc } from "../Model/ApplicationModel";
import { applicationRepository } from "../Repository/applicationRepository";


const createApplication = async (item: IApplicationDoc) => {
    const result = await applicationRepository.createApplication(item);
    return result;
};

export const applicationDAL = {
    createApplication
}

