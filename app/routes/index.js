/**
 * home route is set here.
 */
var express = require("express");
var router = express.Router();
var homePageHandler = function(request,response){
    response.send(`<H1>Welcome</H1>
    <p>Meetups put together artists from all walks of life.</p>`);
}

router.get("/",homePageHandler);

module.exports = router;