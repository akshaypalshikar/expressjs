var express=require("express");
var app=express();
var SERVER_HTTP_PORT = 3000;
var dataFile = require('./data/data.json');
var PORT_STR = 'port';

var homePageHandler = function(request,response){
    response.send(`<H1>Welcome</H1>
    <p>Meetups put together artists from all walks of life.</p>`);
}

var speakersPageHandler = function(request,response){
    var info = "";
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
    var speaker = dataFile.speakers[request.params.speakerId];
    response.send(`<h1>${speaker.title}</h1>
                   <h2> ${speaker.name}</h2>
                   <p>${speaker.summary}</p>
    `);
}

var serverHandler = function(){
    console.log("Server is running!\nGo to http://localhost:"+app.get(PORT_STR)+" on your browser.");
}
app.set(PORT_STR, process.env.PORT || SERVER_HTTP_PORT);

/**
 * All the routes are here.
 */
app.get("/",homePageHandler);
app.get("/speakers",speakersPageHandler);
app.get("/speaker/:speakerId",speakerByIdPageHandler);



var server = app.listen(app.get(PORT_STR),serverHandler);