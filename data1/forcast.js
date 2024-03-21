
const request = require("request")


const forcast = (latitude, longtitude, callback) => {

    const url = "http://api.weatherapi.com/v1/current.json?key=ebdc3b73b00f4945ae5110041240703&q=" + latitude + "," + longtitude;

    request({ url, json: true }, (error, response) => {


        if (error) {
           callback("ERROR HAS OCCURED" , undefined )
        } else if (response.body.error) {
            callback(response.body.error.message , undefined)
        } else {

            callback(undefined , response.body.location.name + " it is " + response.body.current.condition.text)

            // console.log(response.body.location.name, response.body.current.condition.text)

        }
    })
}


module.exports = forcast
