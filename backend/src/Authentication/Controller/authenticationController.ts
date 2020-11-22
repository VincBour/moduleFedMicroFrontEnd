import { Request, Response } from "express";
import { HttpStatus } from "../../utils/HttpStatus";
import { authenticationService } from "../Service/authenticationService";
import jwt from 'jsonwebtoken';
import { UserType } from "../Model/UserModel";

const signUp = async (req: Request, res: Response) => {
    const authInput: UserType = req.body;

    // TODO Validation vacancyInput

    const authOutput = await authenticationService.signUpUser(authInput);
    res.status(HttpStatus.CREATED).json(authOutput);
}

const signIn = async (req: Request, res: Response) => {
    const user = await authenticationService.signInUser(req.body);
    if (!user) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            message: "User not authorize"
        })
    }

    return res.status(HttpStatus.OK).json({
        id: user.id,
        name: user.name,
        token: jwt.sign(
            {userId: user.id},
            'RANDOM_TOKEN_SECRET',
            {expiresIn: '24h'}
        )
    })
}

export const authenticationController = {
    signUp,
    signIn
}