src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzZfFvXIrXkEBtJXI_fvQwEl9MVLi0rpY&sensor=false";

var map;

function goHome() {
    var Home = new google.maps.LatLng(37.236752, -115.801813);
    map.setCenter(Home);
  }
  
function goKTH() {
    var Home = new google.maps.LatLng(59.34694918843402, 18.07322323322296);
    map.setCenter(Home);
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