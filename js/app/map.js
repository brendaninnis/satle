import mapboxgl from 'mapbox-gl';

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
        this.zoomLevels = [18, 16, 14, 11, 8, 4]
        this.zoomLevel = 0
    }

    initMap(loc) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaW5uaXNicmVuZGFuIiwiYSI6ImNtNTVzZXBkNTJzNXgybHNlYTJ4cW9tZHkifQ._lhqqZbY1P1zSHfVR2PTag';

        if (this.storage.isGameOver) {
            this.zoomLevel = this.storage.guesses.length - 1
        } else {
            this.zoomLevel = this.storage.guesses.length
        }

        let zoom = this.zoomLevels[this.zoomLevel]

        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: loc,
            zoom: zoom,
            interactive: false,
        });

        this.map = map
    }

    resetZoom() {
        this.map.zoomTo(this.zoomLevels[this.zoomLevel], { duration: 1000 })
    }

    setZoomToIndex(index) {
        this.map.zoomTo(this.zoomLevels[index], { duration: 1000 })
    }

    zoomOutMap() {
        this.zoomLevel += 1
        this.map.zoomTo(this.zoomLevels[this.zoomLevel], { duration: 1000 })
    }

}

export { GameMap }

