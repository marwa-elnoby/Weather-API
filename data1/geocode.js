
const request = require("request")

const geocode = (address, callback) => {

    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?proximity=ip&access_token=pk.eyJ1IjoibWFyd2FlbG5vYnkwMjYiLCJhIjoiY2x1MWFnY2Y2MGZ4cDJrcXMwd20wcGpzOCJ9.KHMdz9ga9SnhEosq9hq-Qw"

    request({ url: geocodeUrl, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect geocode service", undefined)
        } else if (response.body.message) {
            callback(response.body.message, undefined)
        } else if (response.body.features.length == 0) {
            callback("Unable to find location", undefined)
        } else {

            callback(undefined, {
                longtitude: response.body.features[0].center[0],

                latitude: response.body.features[0].center[1]
            })

        }
    })

}

module.exports = geocode