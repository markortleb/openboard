import express from 'express';
import passport from "passport";
import * as UserController from '../controllers/UserController.js';


const router: express.Router = express.Router();


router.get('/sign-up', function (req, res) {
    res.render(
        'sign-up-page'
    );
});


router.post('/sign-up',
    UserController.createUserHandler,
    (req, res, next) => {
        // This will redirect to the sign-in POST route
        res.redirect(307, '/sign-in');
        next();
    }
);


export {router};
