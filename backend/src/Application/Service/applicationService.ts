import { applicationDAL } from "../DAL/applicationDAL";
import { ApplicationModel, ApplicationType, IApplicationDoc } from "../Model/ApplicationModel";

const createApplication = async (item: ApplicationType): Promise<IApplicationDoc> => {
    const vacancy = new ApplicationModel(item);
    const result = await applicationDAL.createApplication(vacancy);
    return result;
}

export const applicationService= {
    createApplication
}