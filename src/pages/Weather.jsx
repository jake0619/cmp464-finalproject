import {useState} from 'react'
import WeatherData from './WeatherData';

export default function Weather(){
  const[zipCode, setZipCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitZip = (event) =>{
    event.preventDefault();
    let zipcode = event.target[0].value;
    console.log(event);
    console.log("checking if valid zip code: "+event.target.value);
    if(isValidZipcode(zipcode)){
      setZipCode(zipCode);
      
      setErrorMessage("");
    }
    else{
      console.error("Please input a valid 5 digit US zipcode");
      setErrorMessage("Not a valid 5 digit US zipcode: "+zipcode);
    }
    
  }

  const isValidZipcode = (sZip) =>{
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(sZip);
  }




  return(
    <div className='weatherContainer'>
      <h1>Weather</h1>
      <h3>Search for your local weather by inputting your zip code</h3>
      {errorMessage && <div className="error"> {errorMessage} </div>}
      <form onSubmit={handleSubmitZip}>
        <input type="text" placeholder='zipcode'></input>
        <input type="submit"></input>
      </form>
      <WeatherData/>
    </div>
  )
}