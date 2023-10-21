import expressAsyncHandler from "express-async-handler";
import express from "express";
import {randomUUID} from "crypto";
import bcrypt from "bcrypt";

import User from "../models/User.js";


// Database Functions

const getByUsername = async (username): Promise<any> => {
    return await User.find({username: username}).exec();
}


const createUser = async (userId: string, username: string, password: string, 
    createdTimestamp: string, lastLoginTimestamp: string): Promise<boolean> => {
    let isCreated = false;
    if ((await getByUsername(username)).length === 0) {
        const user = new User({
            userId: userId,
            username: username,
            password: password,
            createdTimestamp: createdTimestamp,
            lastLoginTimestamp: lastLoginTimestamp
        });

        await user.save();
        isCreated = true;
    }

    return isCreated;
};


// Middleware

const createUserHandler: express.RequestHandler = expressAsyncHandler(
    async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
        const currentTimestamp = (new Date()).toISOString().slice(0, 19);
        bcrypt.hash(req.body.password, 10,async (err, hashedPassword) => {
            const isCreated = await createUser(
                randomUUID(), 
                req.body.username, 
                hashedPassword, 
                currentTimestamp, 
                currentTimestamp
            );

            req.body.password = hashedPassword;
            res.locals.isCreated = isCreated;

            next();
        });
    }
);


export {
    // Database Functions
    createUser,

    // Middleware
    createUserHandler
}
