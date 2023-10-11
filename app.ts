import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import {router as indexRouter} from './routes/index.js';
import {router as welcomeRouter} from './routes/welcome.js';
import {router as signInRouter} from './routes/sign-in.js';
import {router as signUPRouter} from './routes/sign-up.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function createApp(): express.Express {
    const newApp: express.Express = express();

    newApp.set('views', path.join(__dirname, '../views'));
    newApp.set('view engine', 'ejs');

    newApp.use(express.json());
    newApp.use(express.urlencoded({ extended: false }));

    newApp.use(express.static(path.join(__dirname, './public')));

    newApp.use('/', indexRouter, welcomeRouter, signInRouter, signUPRouter);

    return newApp;
}


const app: express.Express = createApp();

export {app} ;
