import express from "express";
import passport from "passport";

const router: express.Router = express.Router();


router.get("/welcome", function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect("/board");
    } else {
        res.render(
            "welcome-page"
        );
    }
    
});


export {router};

