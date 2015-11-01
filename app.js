// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

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

app.get("/chat/:sessionID",function(request,response){
	response.sendFile("/html/chat.html",{root:"./public"})
	
	console.log(request.params.sessionID)
})



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})