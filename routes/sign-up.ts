import express from 'express';


const router: express.Router = express.Router();


router.get('/sign-up', function (req, res) {
    res.render(
        'sign-up-page'
    );
});


export {router};
