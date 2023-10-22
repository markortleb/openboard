import express from 'express';
const router: express.Router = express.Router();


router.get('/create-post', function (req, res)  {
    res.render(
        'create-post-page'
    );
});


export { router };
