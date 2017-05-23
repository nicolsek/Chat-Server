//Create the app ref.
var app = require("express")();
//Create http ref.
var http = require("http").Server(app);
//Creating socket.io ref
var io = require("socket.io")(http);

//Creating the port we're listening on.
var port = 3000;

//Sending the client data once connected.
app.get("/", function(req, res){
    //Send the client a webpage.
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket){
    socket.on("Message", function(msg) {
        //Send message to everyone!
        io.emit("Message", msg);
    });
});

//Setting up the http listener!
http.listen(port, function() {
    console.log("Listening on port *:" + port);
});
