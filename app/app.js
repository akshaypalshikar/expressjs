var express=require("express");
var app=express();
var SERVER_HTTP_PORT = 3000;
var PORT_STR = "port";
var dataFile = require("./data/data.json");

/**
 * Creating server.
 */

app.use(require("./routes/index"));
app.use(require("./routes/speakers"));

app.set(PORT_STR, process.env.PORT || SERVER_HTTP_PORT);
app.set("appData",dataFile);

var serverHandler = function(){
    console.log("Server is running!\nGo to http://localhost:"+app.get(PORT_STR)+" on your browser.");
}

var server = app.listen(app.get(PORT_STR),serverHandler);