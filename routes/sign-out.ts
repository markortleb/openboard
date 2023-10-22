import express from "express";
import passport from "passport";


const router: express.Router = express.Router();


router.get("/sign-out", (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            console.error(err);
            return next(err);
        }
        res.redirect("/"); 
    });
});


export {router};
