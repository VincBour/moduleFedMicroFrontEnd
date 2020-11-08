import { Document, model, Schema } from 'mongoose';

export const APPLICANT = 'Applicant';

export const ApplicantSchema = new Schema({
    
})

export type ApplicantType = {
    civility: string,
    firstName: string,
    lastName: string,
    title: string,
    address: string,
    birthDate: Date,
    phoneNumber: string,
    nationalities: string,
    education: 'ObjectId',
    jobPreferences: 'ObjectId',

}


export interface IApplicantDoc extends Document {
    
}

export const ApplicantModel = model<IApplicantDoc>(APPLICANT, ApplicantSchema);