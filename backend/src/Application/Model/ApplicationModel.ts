import mongoose, { Document, model, Schema } from 'mongoose';

export const APPLICATION = 'Application';

export const ApplicationSchema = new Schema({
    offerId: {
        type: String,
    },
    applicant: {
        type: 'ObjectId',
        ref: 'Applicant'
    },
    status: {
        type: String,
    },
    creationDate: {
        type: Date,
    }
})

export type ApplicationType = {
    offerId: string,
    applicantId: string,
    status: string,
    creationDate: Date
}


export interface IApplicationDoc extends Document {
    offerId: string,
    applicantId: 'ObjectId',
    status: string,
    creationDate: Date
}

export const ApplicationModel = model<IApplicationDoc>(APPLICATION, ApplicationSchema);