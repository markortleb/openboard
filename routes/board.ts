import express from 'express';
const router: express.Router = express.Router();


router.get('/board', function (req, res)  {
    res.render(
        'board-page'
    );
});


export { router };
