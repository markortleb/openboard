import * as dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();


function getMongoConnString(): string {

    const dbConnInfo = {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        hostname: process.env.HOSTNAME
    }

    return `mongodb+srv://${dbConnInfo.username}:${dbConnInfo.password}@${dbConnInfo.hostname}/?retryWrites=true&w=majority&ssl=true`;
}


async function connect(): Promise<void> {
    const connString = getMongoConnString();

    mongoose.set('strictQuery', false);
    await mongoose.connect(connString);
}


async function disconnect(): Promise<void> {
    await mongoose.disconnect();
}


export {
    getMongoConnString,
    connect,
    disconnect
}
