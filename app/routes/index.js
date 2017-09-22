/**
 * home route is set here.
 */
var express = require("express");
var router = express.Router();
var homePageHandler = function(request,response){
    response.render("index",{
        pageTitle : "Home",
        pageId : "home"
    });
}


router.get("/",homePageHandler);
module.exports = router;