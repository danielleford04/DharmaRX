

// ------------- Chat JS

      var apiKey = '45391022';
      var sessionId = '2_MX40NTM5MTAyMn5-MTQ0NjA1ODE0NjA5NX5FbVRkT2Mzb1NhNklJalVvZ3h6MTZjZWl-UH4'; 
      var token = 'T1==cGFydG5lcl9pZD00NTM5MTAyMiZzaWc9ZTVhMzU4MjkyZjYyOTUyYzliMmQyMjRlZGU2NzAxMWI5MTc5ZDMzYTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5UTTVNVEF5TW41LU1UUTBOakExT0RFME5qQTVOWDVGYlZSa1QyTXpiMU5oTmtsSmFsVnZaM2g2TVRaalpXbC1VSDQmY3JlYXRlX3RpbWU9MTQ0NjE0NTMzMCZub25jZT0wLjgyNDczNzUxNjAzNTQ1OTUmZXhwaXJlX3RpbWU9MTQ0ODczNzMwOCZjb25uZWN0aW9uX2RhdGE9';
      var session = OT.initSession(apiKey, sessionId); 
      session.on({ 
          streamCreated: function(event) { 
            session.subscribe(event.stream, 'subscribersDiv', {insertMode: 'append', width: 900, height:600}); 
          } 
      }); 
      session.connect(token, function(error) {
        if (error) {
          console.log(error.message);
        } else {
          session.publish('myPublisherDiv', {width: 250, height: 200}); 
        }
      });

          function disconnect() {
        session.disconnect();
    }
    
    session.on("sessionDisconnected", function(event){
        console.log("sessionDisconnected event fired");
        // Session has been disconnected. Include any clean up code here
    });