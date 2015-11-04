// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var OpenTok = require('opentok'),
    opentok = new OpenTok('45391022', '4062988e2fc4398ff106d7f0c69243732fc3a5c0');
var session = require('express-session');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: 'flaminglawnchairs',
  saveUninitialized: true,
  cookie: {
    maxAge: 7200000
  }
}))

// Session Array \\
// var sessionArray = ['2_MX40NTM5MTAyMn5-MTQ0NjA1ODE0NjA5NX5FbVRkT2Mzb1NhNklJalVvZ3h6MTZjZWl-UH4']
var sessionArray = []

// Routes \\
app.get('/', function(req, res){
  res.sendFile('/html/index.html', { root: './public'})
});

app.get('/googlea0716b7179ac2b53.html', function(req, res){
  res.sendFile('/html/googlea0716b7179ac2b53.html', { root: './public'})
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

app.get("/chat/session",function(request,response){
	response.sendFile("/html/chat.html",{root:"./public"})
})

app.get("/chati",function(request,response){
  response.sendFile("/html/chati.html",{root:"./public"})
})

app.get('/end', function(req, res){
  res.sendFile('/html/end.html', { root: './public'})
});


//  --------- Student Route - get sessionID, token, push sessionID to array
app.get("/getvalues",function(request,response){
    // if(request.session.token) {
    //   response.send({sessionId: request.session.sessionId, token: request.session.token})
    // }
    // else {
        opentok.createSession({}, function(error, session) {
            if (error) {
             console.log("Error creating session:", error)
              } else {
            request.session.sessionId = session.sessionId;
            console.log("Session ID: " + session.sessionId);
            //  Use the role value appropriate for the user:
            var tokenOptions = {};
            tokenOptions.role = "publisher";

            // Generate a token.
            request.session.token = opentok.generateToken(session.sessionId, tokenOptions);
            console.log("Token: " + request.session.token);

          }
          response.send({sessionId: request.session.sessionId, token: request.session.token})
          sessionArray.push({sessionId: request.session.sessionId})
          console.log('super inside1', sessionArray)
          });
        console.log('inside1', sessionArray)
        // }
})
console.log('outside1', sessionArray)

// ------------ Instructor Route - get token, get and remove sessionID from array
app.get("/getvaluei",function(request,response){
var sessionIdObj = sessionArray.pop()
var sessionId = sessionIdObj.sessionId
console.log('2nd route', sessionId)

    // if(request.session.token) {
    //   response.send({sessionId: sessionId, token: request.session.token})
    //   // console.log(sessionId)
    // }
    // else {
        opentok.createSession({}, function(error, session) {
            if (error) {
             console.log("Error creating session:", error)
              } else {
            console.log("Session ID: " + sessionId);
            //  Use the role value appropriate for the user:
            var tokenOptions = {};
            tokenOptions.role = "publisher";

            // Generate a token.
            request.session.token = opentok.generateToken(sessionId, tokenOptions);
            console.log("Token: " + request.session.token);

          }
          response.send({sessionId: sessionId, token: request.session.token})
          // console.log('super inside2', sessionArray)
          sessionId=''
          });
        // console.log('inside2', sessionArray)
        // }
        // console.log('inside5', sessionArray)
})
// console.log('outside2', sessionArray)


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})