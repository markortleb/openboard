import express from 'express';


const router: express.Router = express.Router();


router.get('/sign-in', function (req, res) {
    res.render(
        'sign-in-page'
    );
});


export {router};
