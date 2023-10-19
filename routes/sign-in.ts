import express from "express";
import passport from "passport";


const router: express.Router = express.Router();


router.get("/sign-in", function (req, res) {
    res.render(
        "sign-in-page"
    );
});

router.post(
    "/sign-in",
    passport.authenticate("local", {
      successRedirect: "/board",
      failureRedirect: "/error"
    })
);


export {router};
