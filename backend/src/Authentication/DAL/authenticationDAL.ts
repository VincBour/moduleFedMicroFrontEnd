import { authenticationController } from "../Controller/authenticationController";
import { IUserDoc } from "../Model/UserModel";
import { authenticationRepository } from "../Repository/authenticationRepository";

const createUser = async (item: IUserDoc): Promise<IUserDoc | null> => {
    const result = await authenticationRepository.createUser<IUserDoc>(item);
    return result;
};

const findOneUser = async (email: string): Promise<IUserDoc | null> => {
    const result = authenticationRepository.findOneUser<IUserDoc>({email: email});
    return result;
}

export const authenticationDAL = {
    findOneUser,
    createUser
}

