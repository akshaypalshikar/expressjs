/**
 * home route is set here.
 */
var express = require("express");
var router = express.Router();
var homePageHandler = function(request,response){
    response.send(`
    <link rel="stylesheet" type="text/css" href = "/css/style.css">
    <H1>Welcome</H1>
    <img src="images/misc/background.jpg" alt="backgroud" style="height:300px;"></img>
    <p>Meetups put together artists from all walks of life.</p>
    <script src="reload/reload.js"></script>
    `);
}


router.get("/",homePageHandler);
module.exports = router;