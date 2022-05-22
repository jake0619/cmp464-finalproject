import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import config from '../config';

export default function WeatherData(){
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [city ,setCity] = useState("");
  const [region, setRegion] = useState("");
  const [feelsLike ,setfeelsLike] = useState("");
  const [temp ,setTemp] = useState("");
  const [wind ,setWind] = useState("");
  const [img, setImg] = useState("");
  const [time, setTime] = useState("");
  
  let params = useParams();
  let {zipCode} = params;

  const getWeatherData = async (zipcode) => {
    let api_key = config.api.weather;
    let response = await fetch("https://api.weatherapi.com/v1/current.json?key="+api_key+"&q="+zipcode+"&aqi=no")
    let result = await response.json();
    let {location: {name: city, region, localtime}, current} = result;
    let {condition, temp_f, wind_mph, } = current
    let {text: feelsLike, icon} = condition
    setCity(city);
    setRegion(region);
    setTime(localtime);
    setTemp(temp_f)
    setWind(wind_mph)
    setfeelsLike(feelsLike)
    setImg(icon)
    setWeatherLoaded(true);
  }
  
  useEffect(()=>{
    console.log("in weather data, zipcode input: "+zipCode);
    //getLocationDataFromZipCode(zipCode);
    getWeatherData(zipCode);
  },[zipCode])

  return(
    <div>
      {weatherLoaded && 
      <div className='weatherDetailContainer'>
        <h1 style={{marginBottom: 0}}>{city}, {region}</h1>
        <h5 style={{marginTop: 0}}>{time}</h5>
        <img src={img}></img>
        <h3>{feelsLike}</h3>
        <h3>Temperature: {temp}ºF</h3>
        <h3>Wind: {wind} MPH</h3>
      </div>
      }
    </div>
  )
}