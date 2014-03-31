var map;


function goHome() {

 
  google.maps.event.addDomListener(HomeButton, 'click', function() {
    var Home = new google.maps.LatLng(37.236752, -115.801813);
    map.setCenter(Home);
  });

}

function initialize() {
  var Area51 = new google.maps.LatLng(37.236752, -115.801813);
  var UFO = new google.maps.LatLng(37.260752, -115.801813);
  var mapOptions = {
    zoom: 13,
    center: Area51,
    mapTypeId: 'satellite',
    disableDefaultUI: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    panControl: true,
    panControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
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

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
    maxWidth: 200
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
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

  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map,marker1);
  })
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map,marker2);
  })     




}



google.maps.event.addDomListener(window, 'load', initialize);