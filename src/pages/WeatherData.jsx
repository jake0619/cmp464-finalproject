import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import config from '../config';

export default function WeatherData(){
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  let params = useParams();
  let {zipCode} = params;
  

  useEffect(()=>{
    console.log("in weather data, zipcode input: "+zipCode);
    getLocationDataFromZipCode(zipCode);
  },[zipCode])

  const getLocationDataFromZipCode = async (zip) => {
    let api_key = config.api.zipcode
    //'https://thezipcodes.com/api/v1/search?zipCode=13040&countryCode=US&apiKey=84cef520019881374ea852f8f8291f0e'
    let response = await fetch("https://thezipcodes.com/api/v1/search?zipCode="+zip+"&countryCode=US&apiKey="+api_key)
                        .catch((err) => {console.error(err)});
    let {success, location} = await response.json();
    let {city, state, longitude, latitude} = location[0];
    setCity(city)
    setState(state)
    setLat(latitude)
    setLong(longitude)
    console.log(city);
  }

  // getLocationDataFromZipCode(zipCode);
  
}