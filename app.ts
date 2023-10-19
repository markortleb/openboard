import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import session from "express-session";
import * as DatabaseConnection from "./util/DatabaseConnection.js";
import { setupPassport } from './util/setupPassport.js';
import {router as indexRouter} from './routes/index.js';
import {router as welcomeRouter} from './routes/welcome.js';
import {router as signInRouter} from './routes/sign-in.js';
import {router as signUpRouter} from './routes/sign-up.js';
import {router as boardRouter} from './routes/board.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function createApp(): express.Express {
    const newApp: express.Express = express();
    const passport = setupPassport();

    newApp.set('views', path.join(__dirname, '../views'));
    newApp.set('view engine', 'ejs');

    newApp.use(express.json());
    newApp.use(session({ secret: process.env.SESSIONSECRET, resave: false, saveUninitialized: true }));
    newApp.use(passport.initialize());
    newApp.use(passport.session());
    newApp.use(express.urlencoded({ extended: false }));

    newApp.use(express.static(path.join(__dirname, './public')));

    newApp.use('/', indexRouter, welcomeRouter, signInRouter, signUpRouter, boardRouter);

    return newApp;
}


DatabaseConnection.connect();


const app: express.Express = createApp();

export {app} ;
