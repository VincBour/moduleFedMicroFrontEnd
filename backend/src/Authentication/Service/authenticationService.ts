import { cryptPassword, validationPassword } from '../../utils/cryptServices';
import { authenticationDAL } from '../DAL/authenticationDAL';
import { IUserDoc, UserModel, UserType } from '../Model/UserModel';


const signUpUser = async (input: UserType): Promise<UserType | null> => {
    const userMail = await authenticationDAL.findOneUser(input.email!)
    if (userMail) {
        return null
    }
    const hashPassword = await cryptPassword(input.password!);
    const userModel = new UserModel({
        name: input.name,
        password: hashPassword,
        email: input.email
    })

    const user = await authenticationDAL.createUser(userModel);

    if (!user) {
        return null
    }

    return generateUser(user);
}

const signInUser = async (input: UserType): Promise<UserType | null> => {
    
    const user = await authenticationDAL.findOneUser(input.email!);
    if (!user) {
        return null;
    }
    const isValidPassword = await validationPassword(input.password!, user.password);
    if (!isValidPassword) {
        return null;
    }
    return generateUser(user);
}

export const authenticationService= {
    signUpUser,
    signInUser
}

const generateUser =(user: IUserDoc): UserType => {
    return {
        id: user._id,
        name:user.name,
        email:user.email
    }
}