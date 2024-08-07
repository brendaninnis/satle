
class Settings {
    /**
     *
     * @param storage           Storage object for persistence
     * @param showDistSwitch    Input tag for show distance option
     * @param distUnitSwitch    Input tag for distance units option
     * @param distUnitValue     Label showing the value of units
     * @param emailButton       Button to email Satle feedback
     */
    constructor(storage, showDistSwitch, distUnitSwitch, distUnitValue, emailButton) {
        this.storage        = storage
        this.showDistSwitch = showDistSwitch
        this.distUnitSwitch = distUnitSwitch
        this.distUnitValue  = distUnitValue
        this.emailButton    = emailButton
    }

    /**
     *
     * @param distanceSettingsDidChange Function called when distance settings change
     */
    bindSettings(distanceSettingsDidChange) {
        let that = this
        this.showDistSwitch.checked = this.storage.showDistance
        this.showDistSwitch.addEventListener('change', (event) => {
            that.storage.toggleShowDistance()
            distanceSettingsDidChange()
        })
        this.distUnitSwitch.checked = this.storage.metricDistance
        this.distUnitValue.textContent = this.storage.metricDistance ? "km" : "mi"
        this.distUnitSwitch.addEventListener('change', (event) => {
            that.storage.toggleMetricDistance()
            that.distUnitValue.textContent = this.storage.metricDistance ? "km" : "mi"
            distanceSettingsDidChange()
        })
        this.emailButton.addEventListener("click", function() {
            window.open('mailto:brendaninnis@icloud.com?subject=Satle%20Feedback&body=' + that.buildFeedbackBody())
        })
    }

    buildFeedbackBody() {
        return "%0A%0A---%0AGame Details:%0A" + JSON.stringify(localStorage) + "%0A%0ADevice Details:%0A" + window.navigator.userAgent
    }
}

export { Settings }

