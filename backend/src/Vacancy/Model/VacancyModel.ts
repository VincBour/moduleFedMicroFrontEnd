import { Document, model, Schema } from 'mongoose';

export const VACANCY = 'Vacancy';

export const VacancySchema = new Schema({
    reference: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    offerCategory: {
        type: String,
        required: true
    },
    offerStatus: {
        type: String,
        required: true
    },
    contract:{
        type: String,
    },
    country: {
        type: String,
    },
    localisation: {
        type: String,
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    description: {
        type: String,
    },
    salaryRange: {
        type: String,
    },
    educationLevel: {
        type: String,
    },
    experienceLevel: {
        type: String
    }
})

export type VacancyType = {
    reference: string,
    offerCategory: string,
    offerStatus: string,
    contract:string,
    country: string,
    localisation: string,
    creationDate: Date,
    description: string,
    salaryRange: string,
    educationLevel: string,
    experienceLevel: string,
    title: string
}


export interface IVacancyDoc extends Document {
    reference: string,
    offerCategory: string,
    offerStatus: string,
    contract:string,
    country: string,
    localisation: string,
    creationDate: Date,
    description: string,
    salaryRange: string,
    educationLevel: string,
    experienceLevel: string,
    title: string
}

export const VacancyModel = model<IVacancyDoc>(VACANCY, VacancySchema);