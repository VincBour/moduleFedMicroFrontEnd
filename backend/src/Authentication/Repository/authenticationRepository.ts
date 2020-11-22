import { repository } from "../../utils/dataBase/Repository"
import { USER, UserSchema } from "../Model/UserModel";


const createUser = repository.create(USER, UserSchema);
const findOneUser = repository.findOneBy(USER, UserSchema);
export const authenticationRepository = {
    createUser,
    findOneUser
}