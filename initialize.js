src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzZfFvXIrXkEBtJXI_fvQwEl9MVLi0rpY&sensor=true";

var map;
var Area51 = new google.maps.LatLng(37.236752, -115.801813);
var UFO = new google.maps.LatLng(37.260752, -115.801813);
var KTH = new google.maps.LatLng(59.34989190484124,18.069108724594116);
console.log(KTH);


  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Hej");
      var geo = new google.maps.LatLng(position.coords.latitude,
       position.coords.longitude);
      
})};

function goTo(div,location) {


  google.maps.event.addDomListener(div, 'click', function() {
    var newlocation = location;
    map.setCenter(newlocation);
    map.setZoom(13);
  });

}

function initialize() {
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
console.log(geo);
  var marker4 = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: geo,
    title: "myPosition"
  });

  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map,marker1);
  })
  google.maps.event.addListener(marker2, 'click', function() {
    infowindow2.open(map,marker2);
  })

  google.maps.event.addListener(marker3, 'click', function() {
    infowindow3.open(map,marker3);
  })      




}
google.maps.event.addDomListener(window, 'load', initialize);