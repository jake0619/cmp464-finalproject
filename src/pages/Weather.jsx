import {useState} from 'react'

export default function Weather(){
  const[zipCode, setZipCode] = useState("");

  const handleZipChange = (event) =>{
    setZipCode(event.target.value);
    console.log(event.target.value);
  }

  return(
    <div className='weatherContainer'>
      <h1>Weather</h1>
      <h3>Search for your local weather by inputting your zip code</h3>
      <form>
        
        <input type="text" placeholder='zipcode' onChange={handleZipChange}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}