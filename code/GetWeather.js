var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function getWeather (location) {
  
  //in future use Bixby library to recognize location's names
  var location = location;
  
  //if 2 words, make it _ between

  var query = location.replace(" ", "_")
  var response = http.getUrl(config.get('remote.url') + query, { format: 'json' });
  console.log(response.location.name);
  
  if(response.current.temp_f > 80) {
    var weatherImage = "scorcher.gif"
  }
  
  if(response.current.temp_f < 60 > 45) {
    var weatherImage = "sweater_weather.gif"
  }
  
  if(response.current.temp_f < 45 > 30) {
    var weatherImage = "six_sweaters.gif"
  }
  
  if(response.current.condition.text == "frost") {
    var weatherImage = "ice.gif"
  }
  
  if(response.current.condition.text == "snow") {
    var weatherImage = "cat_snow.gif"
  }
  
  if(response.current.condition.text == "wind") {
    var weatherImage = "dog_wind.gif"
  }
  
  if(response.current.condition.text =="rain") {
    var weatherImage = "singing_rain.gif"
  }
  //else {var weatherImage = "brad_pitt_weather.gif"}
  
  return {
    cityName: response.location.name,
    feelsLike: response.current.condition.text,
    temperature: response.current.temp_f,
    weatherImage: weatherImage
    
  }
  
  //pass weather forecast from API to the weather
 // return {
 //   feelsLike: "Something",
 //   temperature: 99.0,
 //   cityName: "here"
 // }
 
}
