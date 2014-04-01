src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzZfFvXIrXkEBtJXI_fvQwEl9MVLi0rpY&sensor=false";

var map;

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

  var marker = new google.maps.Marker({
    position: Area51,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    title: "Hello World!"
  });


  var marker = new google.maps.Marker({
    position: UFO,
    map: map,
    draggable: true,
    animation: google.maps.Animation.BOUNCE,
    title: "Hello World!"
  });


}
google.maps.event.addDomListener(window, 'load', initialize);