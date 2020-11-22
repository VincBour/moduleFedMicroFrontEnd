import { Document, model, Schema } from 'mongoose';

export const USER = 'User';

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export type UserType = {
    id?: string;
    name: string;
    email?: string;
    password?: string;
}


export interface IUserDoc extends Document {
    name: string;
    email: string;
    password: string;
}

export const UserModel = model<IUserDoc>(USER, UserSchema);