var http=require("http");

var serverHandler = function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Meetups");
    response.end();
    
}

var server = http.createServer(serverHandler);



server.listen(3000);
console.log("Server is running!\nGo to http://localhost:3000 on your browser.");