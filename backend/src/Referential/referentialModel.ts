import { model, Schema, Document } from "mongoose";

export const PAYS = 'Pays';

export const ReferentialSchema = new Schema({
    label: {
        type: String
    },
    value: {
        type: String
    }
})

export interface ReferentialDoc extends Document {
    label: string;
    value: string;
}

export const PaysModel = model<ReferentialDoc>(PAYS, ReferentialSchema);