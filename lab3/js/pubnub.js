     var i = 1;
     
    var input = "Chatten börjar ....";
    var username = "Server";
    var channel = "ingen";
     
    var pubnub = PUBNUB.init({
        publish_key   : "pub-c-273ee5c6-cded-4915-b196-954c4fc1ba4e",
        subscribe_key : "sub-c-39034c9e-c3a8-11e3-ab7b-02ee2ddab7fe",
        uuid: 'Evert'
        })
 
 	if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
           console.log("Hej");
           var lat = position.coords.latitude;
           var lon = position.coords.longitude;
           


           var geocoder = new google.maps.Geocoder();

           var latlng = new google.maps.LatLng(lat, lon);
           geocoder.geocode({'latLng': latlng}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[6]) {   
                console.log(results[6].formatted_address);
                console.log(lat, lon);
                nav = results[6].formatted_address;
              }
            } else {
              alert("Geocoder failed due to: " + status);
            }
          });
           console.log("What");
           if(
            //latitude max
            lat <= 59.346979 && 
            //latitude min
            lat >= 59.346664 &&
            //longitude max
            lon <= 18.073809 &&
            //longitude min
            lon >= 18.073450

            ) 
           {
            channel = "D-huset";
          } else {
            channel = "Other";
           }})}
           
         
    
     

    function start() {

      // Grab the elements
       input = $("#input");
       username = $("#username");
       channel = "Other";
      var buttonSend = $("#buttonSend");
      var buttonHistory = $("#buttonHistory");
      var output = $("#output");
     
       if (input.val() != '' && username.val != ('')){
       	
            Communication(channel, username, input, output)
            Communication(channel, username, input, output)
            Communication(channel, username, input, output)
          
          }
      };
          
    function Communication(channel, username, input, output){
    	 
    	  var text = output.html();
    	 
    	  
    	  pubnub.publish({
            'channel' : channel,
            'message' : "<br /><b>" + username.val() + " says:</b><br />" + input.val() + "<br />"
			 
          })
          
         
          pubnub.subscribe({
           'channel'   : channel,
           'callback'  : function(message) {
            output.html(text + '<br />' + "Channel: " + channel + message);
            input.val('');
          }
          
        })
        if (text==""){
         pubnub.publish({
            'channel' : channel,
            'message' : "<br /><b>" + username.val() + " says:</b><br />" + input.val() + "<br />"
			 
          })
          
         
          pubnub.subscribe({
           'channel'   : channel,
           'callback'  : function(message) {
            output.html(text + '<br />' + "Channel: " + channel + message);
            input.val('');
          }
          
        })
        }
        }



