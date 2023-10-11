import express from 'express';
const router: express.Router = express.Router();


router.get('/', function (req, res)  {
    res.redirect("/welcome");
});


export { router };
