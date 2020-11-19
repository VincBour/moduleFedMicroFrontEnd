import mongoose, { Model, Schema } from 'mongoose';

const getCollection = async <T extends mongoose.Document>(collectionName: string, schema: Schema): Promise<mongoose.Model<T, {}>> => {
    const client = await mongoose.connect('mongodb://localhost:27017/dbmfe', {useNewUrlParser: true, useUnifiedTopology: true });
    const connection = client.connection;
    console.log(connection.model(collectionName, schema));
    return connection.model(collectionName, schema);
}

const find = (collectionName: string, schema: Schema) => async <T extends mongoose.Document>() :Promise<T[]> => {
        const collection : Model<T, {}> = await getCollection<T>(collectionName, schema);
        
        return collection.find().exec();
}

const findAllByRef = (collectionName: string, schema: Schema) => async <T extends mongoose.Document>(references: string[]) :Promise<T[]> => {
        const collection : Model<T, {}> = await getCollection<T>(collectionName, schema);
        return await collection.find().where('reference').in(references).exec();
}

const findOne = (collectionName: string, schema: Schema) => async <T extends mongoose.Document>(id: string): Promise<T | null> => {
        const collection : Model<T, {}> = await getCollection<T>(collectionName, schema);
        return collection.findById(id).exec();
}

 const create = (collectionName: string, schema: Schema) => async <T extends mongoose.Document>(item: T): Promise<T> => {
        await getCollection(collectionName, schema);
        return await item.save();
}

const update = (collectionName: string, schema: Schema) => async <T extends mongoose.Document>(id: string, item: T): Promise<T | null> =>{
        const collection : Model<T, {}> = await getCollection<T>(collectionName, schema);
        return collection.findByIdAndUpdate(id,item,{new:true}).exec();
}

const  deleteOne = (collectionName: string, schema: Schema) => async <T extends mongoose.Document>(id: string): Promise<T | null> =>{
        const collection : Model<T, {}> = await getCollection<T>(collectionName, schema);
        return collection.findByIdAndDelete(id).exec();
}

export const repository = {
    find,
    findOne,
    create,
    update,
    deleteOne,
    findAllByRef
}