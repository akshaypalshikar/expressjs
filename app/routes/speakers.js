/**
 * Speaker routes are set here.
 */

var express = require("express");
var router = express.Router();

var speakersPageHandler = function(request,response){
    var info = "";
    var dataFile = request.app.get("appData");
    dataFile.speakers.forEach(function(element) {
        info += `
                <li>
                    <h2>${element.name}</h2>
                    <p>${element.summary}</p>
                </li>
        `;
    });
    response.send(`<H1>Meetups</H1>
        ${info} 
    `);
}

var speakerByIdPageHandler = function(request,response){
    var info = "";
    var dataFile = request.app.get("appData");
    var speaker = dataFile.speakers[request.params.speakerId];
    response.send(`<h1>${speaker.title}</h1>
                   <h2> ${speaker.name}</h2>
                   <p>${speaker.summary}</p>
    `);
}

router.get("/speakers",speakersPageHandler);
router.get("/speaker/:speakerId",speakerByIdPageHandler);


module.exports = router;