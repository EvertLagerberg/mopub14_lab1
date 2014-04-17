

    // When the DOM is ready...
    $(function() {
 

      // Grab the elements
      var input = $("#input");
      var username = $("#username");
      var channel = "Other";
      var buttonSend = $("#buttonSend");
      var buttonHistory = $("#buttonHistory");
      var output = $("#output");

      // send messages
      buttonSend.on('click', function() {
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
            if (input.val() != '' && username.val() != ''){
            console.log("Tommy");
            Communication(channel, username, input, output)
          }}})}})});
          
    function Communication(channel, username, input, output){
    
    // Init PubNub
    
      var pubnub = PUBNUB.init({
        publish_key   : "pub-c-273ee5c6-cded-4915-b196-954c4fc1ba4e",
        subscribe_key : "sub-c-39034c9e-c3a8-11e3-ab7b-02ee2ddab7fe",
        uuid: 'Evert'
        
      });


          pubnub.subscribe({
           'channel'   : channel,
           'callback'  : function(message) {
            console.log('Channel Change = ' + channel )
            output.html(output.html() + '<br />' + "Channel: " + channel + message);
            input.val('');
          }
        });
        
          pubnub.publish({

            'channel' : channel,
            'message' : "<br /><b>" + username.val() + " says:</b><br />" + input.val() + "<br />"

          });
       
          }












