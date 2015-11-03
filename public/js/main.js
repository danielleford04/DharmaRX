angular.module('App', []);

angular.module('App')
	.controller('indexController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){

// ------------- Home ------------ \\

  window.signOut = function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
	});
  }

// $timeout(function(){
// 	console.log(gapi.auth2)
// 	var auth2 = gapi.auth2.getAuthInstance();

// 	console.log(auth2, auth2.isSignedIn.get())
// 	if (auth2.isSignedIn.get() == false){

//   		window.location.href = '/login'
// 	}
	
// }, 2500)



}])

// ------------------ Chat - Student ------------ \\

angular.module('App')
	.controller('chatController', ['$scope', '$http', function($scope, $http){



	$http.get('/getvalues')
		.then(function(returnData){
			console.log(returnData.data)
			var sessionObject = returnData.data
		// ------------- Chat JS

		// var apiKey = '45391022';
		// var sessionId = '2_MX40NTM5MTAyMn5-MTQ0NjA1ODE0NjA5NX5FbVRkT2Mzb1NhNklJalVvZ3h6MTZjZWl-UH4'; 
		// var token = 'T1==cGFydG5lcl9pZD00NTM5MTAyMiZzaWc9ZTVhMzU4MjkyZjYyOTUyYzliMmQyMjRlZGU2NzAxMWI5MTc5ZDMzYTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5UTTVNVEF5TW41LU1UUTBOakExT0RFME5qQTVOWDVGYlZSa1QyTXpiMU5oTmtsSmFsVnZaM2g2TVRaalpXbC1VSDQmY3JlYXRlX3RpbWU9MTQ0NjE0NTMzMCZub25jZT0wLjgyNDczNzUxNjAzNTQ1OTUmZXhwaXJlX3RpbWU9MTQ0ODczNzMwOCZjb25uZWN0aW9uX2RhdGE9';
		var apiKey = '45391022'
		var sessionId = sessionObject.sessionId;
		var token = sessionObject.token;
		$scope.session = OT.initSession(apiKey, sessionId); 
		$scope.session.on({ 
		    streamCreated: function(event) { 
		        $scope.session.subscribe(event.stream, 'subscribersDiv', {insertMode: 'append', width: 900, height:500}); 
		    } 
		}); 
		$scope.session.connect(token, function(error) {
		    if (error) {
		      console.log(error.message);
		    } else {
		      $scope.session.publish('myPublisherDiv', {width: 250, height: 200}); 
		    }
		});

		// function disconnect() {
	 //   		session.disconnect();
		// }
	    
	 //    session.on("sessionDisconnected", function(event){
	 //        console.log("sessionDisconnected event fired");
	 //        // Session has been disconnected. Include any clean up code here
	 //    });
	})
$scope.endCallForm = false;
$scope.endCall= function() {
   		$scope.endCallForm= !$scope.endCallForm;
		$scope.session.disconnect();
  //  				function disconnect() {
	 //   		session.disconnect();
		// }
	    
	    $scope.session.on("sessionDisconnected", function(event){
	        console.log("sessionDisconnected event fired");
	        // Session has been disconnected. Include any clean up code here
	    });
    }



}])

// ----------------- Chat - Instructor ---------- //

angular.module('App')
	.controller('chatiController', ['$scope', '$http', function($scope, $http){

	$http.get('/getvaluei')
		.then(function(returnData){
			console.log(returnData.data)
			var sessionObject = returnData.data
	
		// ------------- Chat JS

		// var apiKey = '45391022';
		// var sessionId = '2_MX40NTM5MTAyMn5-MTQ0NjA1ODE0NjA5NX5FbVRkT2Mzb1NhNklJalVvZ3h6MTZjZWl-UH4'; 
		// var token = 'T1==cGFydG5lcl9pZD00NTM5MTAyMiZzaWc9ZTVhMzU4MjkyZjYyOTUyYzliMmQyMjRlZGU2NzAxMWI5MTc5ZDMzYTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5UTTVNVEF5TW41LU1UUTBOakExT0RFME5qQTVOWDVGYlZSa1QyTXpiMU5oTmtsSmFsVnZaM2g2TVRaalpXbC1VSDQmY3JlYXRlX3RpbWU9MTQ0NjE0NTMzMCZub25jZT0wLjgyNDczNzUxNjAzNTQ1OTUmZXhwaXJlX3RpbWU9MTQ0ODczNzMwOCZjb25uZWN0aW9uX2RhdGE9';
		var apiKey = '45391022'
		var sessionId = sessionObject.sessionId;
		var token = sessionObject.token;
		$scope.session = OT.initSession(apiKey, sessionId); 
		$scope.session.on({ 
		    streamCreated: function(event) { 
		        $scope.session.subscribe(event.stream, 'subscribersDiv', {insertMode: 'append', width: 900, height:500}); 
		    } 
		}); 
		$scope.session.connect(token, function(error) {
		    if (error) {
		      console.log(error.message);
		    } else {
		      $scope.session.publish('myPublisherDiv', {width: 250, height: 200}); 
		    }
		});

		// function disconnect() {
	 //   		session.disconnect();
		// }
	    
	 //    session.on("sessionDisconnected", function(event){
	 //        console.log("sessionDisconnected event fired");
	 //        // Session has been disconnected. Include any clean up code here
	 //    });
	})

$scope.endCallForm = false;
$scope.endCall= function() {
   		$scope.endCallForm= !$scope.endCallForm;
		$scope.session.disconnect();
  //  				function disconnect() {
	 //   		session.disconnect();
		// }
	    
	    $scope.session.on("sessionDisconnected", function(event){
	        console.log("sessionDisconnected event fired");
	        // Session has been disconnected. Include any clean up code here
	    });
    }




}])


// ------------------- Login ----------- \\
angular.module('App')
	.controller('loginController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){

console.log(gapi)
$timeout(function(){
	console.log(gapi.auth2)
	var auth2 = gapi.auth2.getAuthInstance();

	console.log(auth2, auth2.isSignedIn.get())
	if (auth2.isSignedIn.get() == true){

  		window.location.href = '/'
	}
	
}, 2500)



}])