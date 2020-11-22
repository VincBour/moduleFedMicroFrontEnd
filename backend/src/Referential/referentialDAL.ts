import { ReferentialDoc } from "./referentialModel";
import { referentialRepository } from './referentialRepository';

const findAllContract = async () :Promise<ReferentialDoc[]> => {
    const result = await referentialRepository.findAllContract<ReferentialDoc>();
    return result;
}
const findAllPays = async () :Promise<ReferentialDoc[]> => {
    const result = await referentialRepository.findAllPays<ReferentialDoc>();
    return result;
}
const findAllSpecialite = async () :Promise<ReferentialDoc[]> => {
    const result = await referentialRepository.findAllSpecialite<ReferentialDoc>();
    console.log(result);
    return result;
}
const findOnePays = async (id: string) :Promise<ReferentialDoc | null> => {
    const result = await referentialRepository.findOnePays<ReferentialDoc>(id);
    return result;
}
const findOneContract = async (id: string) :Promise<ReferentialDoc | null> => {
    const result = await referentialRepository.findOneContract<ReferentialDoc>(id);
    return result;
}
const findOneSpecialite = async (id: string) :Promise<ReferentialDoc | null> => {
    const result = await referentialRepository.findOneSpecialite<ReferentialDoc>(id);
    return result;
}

const createRef = async (ref: ReferentialDoc): Promise<ReferentialDoc | null> => {
    const result = await referentialRepository.createRef(ref);
    return result;
}

export const referentialDAL = {
    findAllContract,
    findAllPays,
    findAllSpecialite,
    findOnePays,
    findOneContract,
    findOneSpecialite,
    createRef
}