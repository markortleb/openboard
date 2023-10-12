import express from 'express';
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
        res.redirect('/board');
        next();
    }
);


export {router};
