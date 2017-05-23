//Setting up the http listener.

//Create the app ref.
var app = require("express")();
//Create http ref.
var http = require("http").Server(app);

//Creating the port we're listening on.
var port = 3000;

//Sending the client data once connected.
app.get("/", function(req, res){
    //Send the client a webpage.
    res.sendFile(__dirname + "/index.html");
});

//Setting up the http listener!
http.listen(port, function() {
    console.log("Listening on port *:" + port);
});
