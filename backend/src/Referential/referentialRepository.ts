import { repository } from "../utils/dataBase/Repository";
import { PAYS, ReferentialSchema, SPECIALITE } from './referentialModel';

const findAllPays = repository.find(PAYS, ReferentialSchema);
const findAllContract = repository.find('Contracts', ReferentialSchema);
const findAllSpecialite = repository.find(SPECIALITE, ReferentialSchema);

const findOnePays = repository.findOne(PAYS, ReferentialSchema);
const findOneContract = repository.findOne('Contracts', ReferentialSchema);
const findOneSpecialite = repository.findOne(SPECIALITE, ReferentialSchema);

const createRef = repository.create(SPECIALITE, ReferentialSchema);

export const referentialRepository = {
    findAllContract,
    findAllPays,
    findAllSpecialite,
    findOnePays,
    findOneContract,
    findOneSpecialite,
    createRef
}