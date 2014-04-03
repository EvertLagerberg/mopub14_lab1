var map;
var Santiago = new google.maps.LatLng(-33.448575, -70.664123);
var Area51 = new google.maps.LatLng(37.236752, -115.801813);
var UFO = new google.maps.LatLng(37.260752, -115.801813);
var KTH = new google.maps.LatLng(59.34989190484124,18.069108724594116);
var geo;




      function goHome() {
        map.setCenter(Area51);
      }

      function goKTH() {
        map.setCenter(KTH);
      }

      function goSantiago() {
        map.setCenter(Santiago);
        map.setTilt(45);
        map.setZoom(20);
      }      
    
    function zoomin() {
     var currentZoomLevel = map.getZoom();
     if(currentZoomLevel != 0){
       map.setZoom(currentZoomLevel + 1);}   
     }

     function zoomout() {
       var currentZoomLevel = map.getZoom();
       if(currentZoomLevel != 0){
         map.setZoom(currentZoomLevel - 1);}   
       }

       function goUp() {
         var oldLoc = map.getCenter();
         var newLoc = new google.maps.LatLng(oldLoc.lat() + 0.05, oldLoc.lng());
         map.setCenter(newLoc);   
       }

       function goDown() {
         var oldLoc = map.getCenter();
         var newLoc = new google.maps.LatLng(oldLoc.lat() - 0.05, oldLoc.lng());
         map.setCenter(newLoc);   
       }

       function goLeft() {
         var oldLoc = map.getCenter();
         var newLoc = new google.maps.LatLng(oldLoc.lat(), oldLoc.lng() - 0.05);
         map.setCenter(newLoc);   
       }

       function goRight() {
         var oldLoc = map.getCenter();
         var newLoc = new google.maps.LatLng(oldLoc.lat(), oldLoc.lng() + 0.05);
         map.setCenter(newLoc);   
       }






      function geoLocation() {

              // Try HTML5 geolocation
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("1");
          var navigator = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          map.setCenter(navigator);

          var alienMarker = {
            path: 'M 375,8.5 C 226.5,8.5 21.5,102.2 21.5,346 C 21.5,346.8 21.5,347.7 21.5,348.5 C 23.2,591.2 270.1,891.5 375,891.5 C 480.3,891.5 728.5,589.8 728.5,346 C 728.5,102.2 523.5,8.5 375,8.5 z M 57,367.5 C 230,367.5 355,489.5 355,672.5 C 174,672.5 57,555.5 57,367.5 z M 699,367.5 C 699,555.5 579.6,672.5 395,672.5 C 395,489.5 522.5,367.5 699,367.5 z',
            fillColor: 'orange',
            fillOpacity: 0.8,
            scale: 0.05,
            strokeColor: 'gold',
            strokeWeight: 1
          };

           
          var marker4 = new google.maps.Marker({
          position:navigator,
          map:map,
          icon:alienMarker,
          draggable:false,
          animation: google.maps.Animation.DROP,
          position: navigator,
          title: "myPosition"
        });

        })
        

        
        
      };
      }






       function initialize() {
      console.log("1");




      console.log("2");
        var mapOptions = {
          zoom:13,
          center: Area51,
          mapTypeId: 'satellite',
          disableDefaultUI: true,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.LEFT_TOP
          }
        }

        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);



        var contentString1 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">Area51</h2>'+
        '<div id="bodyContent">'+
        '<p>Aliens where here!</p>'+

        '</div>'+
        '</div>';

        var contentString2 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">Landing site</h2>'+
        '<div id="bodyContent">'+
        '<p>The aliens landed somewhere out in the desert...!</p>'+

        '</div>'+
        '</div>';


        var contentString3 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">KTH</h2>'+
        '<div id="bodyContent">'+
        '<p>hmmm...Aliens??</p>'+

        '</div>'+
        '</div>'; 


        var infowindow1 = new google.maps.InfoWindow({
          content: contentString1,
          maxWidth: 200
        });

        var infowindow2 = new google.maps.InfoWindow({
          content: contentString2,
          maxWidth: 200
        });

        var infowindow3 = new google.maps.InfoWindow({
          content: contentString3,
          maxWidth: 200
        });

        var marker1 = new google.maps.Marker({
          position: Area51,
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          title: "Area51"
        });


        var marker2 = new google.maps.Marker({
          position: UFO,
          map: map,
          draggable: true,
          animation: google.maps.Animation.BOUNCE,
          title: "UFO Landing site"
        });

        var marker3 = new google.maps.Marker({
          map:map,
          draggable:true,
          animation: google.maps.Animation.DROP,
          position: KTH,
          title: "KTH"
        });
        console.log("3");

        
        google.maps.event.addListener(marker1, 'click', function() {
          infowindow1.open(map,marker1);
        })
        google.maps.event.addListener(marker2, 'click', function() {
          infowindow2.open(map,marker2);
        })

        google.maps.event.addListener(marker3, 'click', function() {
          infowindow3.open(map,marker3);
        })      
        console.log("4");
  



      }
      google.maps.event.addDomListener(window, 'load', initialize);