/**
 * @Class
 * An instance of the game map
 */
class GameMap {
    /**
     *
     * @param zoom          The initial zoom level for the map.
     * @param zoomFactor    The amount the map zooms out for each guess.
     */
    constructor(zoom, zoomFactor) {
        this.zoom = zoom;
        this.zoomFactor = zoomFactor;
    }

    initMap() {
        this.map = new google.maps.Map(document.getElementById("map"), {
            zoom: this.zoom,
            center: loc,
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

    resetZoom() {
        this.map.setZoom(this.zoom);
    }

    setZoomToIndex(index) {
        this.map.setZoom(this.zoom + this.zoomFactor * index);
    }

    zoomOutMap() {
        this.zoom -= this.zoomFactor;
        this.map.setZoom(this.zoom);
    }

}
