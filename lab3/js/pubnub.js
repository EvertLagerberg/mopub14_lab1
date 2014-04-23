




    // When the DOM is ready...
    $(function() {



      // Grab the elements
      var input = $("#input");
      var username = $("#username");
      var channel = "Other";
      var buttonSend = $("#buttonSend");
      var buttonHistory = $("#buttonHistory");
      var output = $("#output");

      // Init PubNub
      var pubnub = PUBNUB.init({
        publish_key   : "pub-c-273ee5c6-cded-4915-b196-954c4fc1ba4e",
        subscribe_key : "sub-c-39034c9e-c3a8-11e3-ab7b-02ee2ddab7fe",
        uuid: 'Evert'
      });

      pubnub.subscribe({
       'channel'   : channel,
       'callback'  : function(message) {
        console.log('Subscribe = ' + channel )
        output.html(output.html());
      }
    });



      

      
      

      // send messages
      buttonSend.on('click', function() {

        $('.progress-bar').animate({ width: "50%" },1000);
    


        geolocation(function(channel) {

          console.log("got geo " + channel);

          publish(channel, username, input, output, pubnub, function (channel, username, input, output, pubnub){

            console.log("subscribe");
            $('.progress-bar').animate({ width: "100%" },1);


            pubnub.subscribe({
             'channel'   : channel,
             'callback'  : function(message) {
              console.log('Subscribe = ' + channel )
              output.html(output.html() + '<br />' + "Channel: " + channel + message);
            }
          });










          });


          




        });


      })



    });






function publish(channel, username, input, output, pubnub, callback) {

  console.log("publish");


  pubnub.publish({

    'channel' : channel,
    'message' : "<br /><b>" + username.val() + " says:</b><br />" + input.val() + "<br />"


  });


  console.log("Here");
  callback(channel, username, input, output, pubnub);
}





function geolocation(callback) {
  console.log("geofunction");


  navigator.geolocation.getCurrentPosition(function(position) {

   var lat = position.coords.latitude;
   var lon = position.coords.longitude;
   console.log(lat);



           /*var geocoder = new google.maps.Geocoder();

           var latlng = new google.maps.LatLng(lat, lon);
           geocoder.geocode({'latLng': latlng}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[6]) {   
                console.log("GeoFound");
                console.log(lat, lon);
                //nav = results[6].formatted_address;
              }
            } else {
              alert("Geocoder failed due to: " + status);
            }
          });*/

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
    console.log("If");
    channel = "Torget";
  } else {
    channel = "Other"
  }

  callback(channel);




})

}












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
            
            Communication(channel, username, input, output)
            Communication(channel, username, input, output)
            
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




