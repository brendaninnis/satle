/**
 * @Class
 * An instance of the game map
 */
class GameMap {
    /**
     *
     * @param storage       The storage object
     */
    constructor(storage) {
        this.storage = storage
        this.zoomLevels = [19, 17, 15, 12, 9, 5]
        this.zoomLevel = 0
    }

    initMap() {
        if (storage.isGameOver) {
            this.zoomLevel = storage.guesses.length - 1
        } else {
            this.zoomLevel = storage.guesses.length
        }

        let zoom = this.zoomLevels[this.zoomLevel]
        this.map = new google.maps.Map(document.getElementById("map"), {
            zoom: zoom,
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
        })
    }

    resetZoom() {
        this.map.setZoom(this.zoomLevels[this.zoomLevel])
    }

    setZoomToIndex(index) {
        this.map.setZoom(this.zoomLevels[index])
    }

    zoomOutMap() {
        this.zoomLevel += 1
        this.map.setZoom(this.zoomLevels[this.zoomLevel])
    }

}
