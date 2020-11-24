import { referentialDAL } from "./referentialDAL";
import { ReferentialDoc } from "./referentialModel";

const findAll = async (name: string): Promise<ReferentialDoc[]> => {
    const result = await getFindAll(name)();
    return result;
}

const findOne = async (name: string, id: string) : Promise<ReferentialDoc | null> => {
    const result = await getFindOne(name)(id);
    return result;
} 

const createRef = async (body: ReferentialDoc): Promise<ReferentialDoc | null> => {
    const result = await referentialDAL.createRef(body);
    return result;
}

const getFindAll = (name: string) => {
    const mapping: {[key: string]: () => Promise<ReferentialDoc[]>} = {
        ['pays']: referentialDAL.findAllPays,
        ['contracts']: referentialDAL.findAllContract,
        ['specialite']: referentialDAL.findAllSpecialite
    }
    return mapping[name];
}

const getFindOne = (name: string) => {
    const mapping: {[key: string]: (id: string) => Promise<ReferentialDoc | null>} = {
        ['pays']: referentialDAL.findOnePays,
        ['contracts']: referentialDAL.findOneContract,
        ['specialite']: referentialDAL.findOneSpecialite
    }
    return mapping[name];
}

export const referentialService = {
    findAll,
    findOne,
    createRef
}