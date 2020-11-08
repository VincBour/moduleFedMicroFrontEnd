import { Document, model, Schema } from 'mongoose';

export interface ITodoDoc extends Document {
    title: string;
    description: string;
    status: string;
    category: string;
    link: string[];
    date: Date;
}
export const TODO = 'Todo';
export const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    cartegory: { 
        type: String
    },
    link: {
        type: Array<String>()
    },
    date: {
        type: Date
    }
})

export const TodoDTO = model<ITodoDoc>(TODO, TodoSchema);
export default TodoDTO;