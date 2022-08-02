var zoom = 18;
var map;

function initMap() {
    const city = { lat: 48.4195002, lng: -123.3701672 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoom,
        center: city,
        disableDefaultUI: true,
        gestureHandling: "none",
        keyboardShortcuts: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
}

function zoomOutMap() {
    zoom -= 2;
    map.setZoom(zoom);
}

function submit(guess) {
    zoomOutMap();
    console.log(guess);
}

$("#guessForm").submit(function(event) {
    submit($("#guessBox").val());
    $("#guessBox").val(null);
    event.preventDefault();
});

window.initMap = initMap;
