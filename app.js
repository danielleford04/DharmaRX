// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var OpenTok = require('opentok'),
    opentok = new OpenTok('45391022', '4062988e2fc4398ff106d7f0c69243732fc3a5c0');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('/html/index.html', { root: './public'})
});

app.get('/index', function(req, res){
  res.sendFile('/html/index.html', { root: './public'})
});

app.get("/chat",function(request,response){
	response.sendFile("/html/chat.html",{root:"./public"})
})

app.get("/login",function(request,response){
	response.sendFile("/html/login.html",{root:"./public"})
})

app.get("/chat/:session",function(request,response){
	response.sendFile("/html/chat.html",{root:"./public"})
// opentok.createSession(function(err, session) {
//   if (err) return console.log(err);
//   console.log("Session ID: " + session.sessionId);
// });
var sessionId;
var token
opentok.createSession({}, function(error, session) {
  if (error) {
    console.log("Error creating session:", error)
  } else {
    sessionId = session.sessionId;
    console.log("Session ID: " + sessionId);
    //  Use the role value appropriate for the user:
    var tokenOptions = {};
    tokenOptions.role = "publisher";
    tokenOptions.data = "username=bob";

    // Generate a token.
    token = opentok.generateToken(sessionId, tokenOptions);
    console.log(token);
  }
});
	console.log(request.params.session)
})



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})