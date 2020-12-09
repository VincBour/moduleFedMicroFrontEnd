import mongoose from 'mongoose';

export const ClientContext = async () => {
    const client = await mongoose.connect('mongodb://localhost:27017/dbmfe', {useNewUrlParser: true, useUnifiedTopology: true });
//     const client = await mongoose.connect('mongodb://localhost:37017/microfrontend', {useNewUrlParser: true, useUnifiedTopology: true });
    return client;
}