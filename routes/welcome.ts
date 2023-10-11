import express from 'express';


const router: express.Router = express.Router();


router.get('/welcome', function (req, res) {
    res.render(
        'welcome-page'
    );
});


export {router};

