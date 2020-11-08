import { repository } from "../../utils/dataBase/Repository"
import { APPLICATION, ApplicationSchema } from "../Model/ApplicationModel";

const createApplication = repository.create(APPLICATION, ApplicationSchema);

export const applicationRepository = {
    createApplication
}