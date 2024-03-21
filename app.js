

const request = require("request");

const forcast = require("./data1/forcast")
const geocode = require("./data1/geocode")

const country = process.argv[2]

geocode(country , (error , data) =>{
    console.log("ERROR : " , error)
    console.log("DATA : " , data)

    forcast(data.latitude , data.longtitude, (error, data) => {
        console.log("ERROR : ", error)
        console.log("DATA : ", data)
    })
} )

   

////////////////////////////////////////////////////