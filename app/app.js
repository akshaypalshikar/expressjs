var express=require("express");
var app=express();
var SERVER_HTTP_PORT = 3000;
var PORT_STR = "port";
var dataFile = require("./data/data.json");
var reload = require("reload");

/**
 * Creating server.
 */
app.use(express.static("app/public"));
app.use(require("./routes/index"));
app.use(require("./routes/speakers"));

app.set(PORT_STR, process.env.PORT || SERVER_HTTP_PORT);
app.set("appData",dataFile);
app.set("view engine","ejs");
app.set("views","app/views");

app.locals.siteTitle  = "Roux Meetups";

var serverHandler = function(){
    console.log("Server is running!\nGo to http://localhost:"+app.get(PORT_STR)+" on your browser.");
}

var server = app.listen(app.get(PORT_STR),serverHandler);
reload(server,app);