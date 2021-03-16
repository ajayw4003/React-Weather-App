
import './App.css';
import { useState } from 'react';
import Location from "./component/city/city";
import Weather from "./component/Weather/weather";

function App() {

  const currentDate = (d)=>{
    let months = ["January", "February", "March", "April", "May", 
                  "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    main:{
      temp:"",
    },
    weather:[{}],
    
  });

  const [error, setError] =useState("");
  

 const fetchWeather = ()=>{
  if(city === ""){
    setError("Required input field")
    console.log("REquired field input");
  }else{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c496af33d732297c30b641b3b235e47`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setWeather(result);
    })
    setError("");
   }

 }

 const handleChange  = (e) =>{
    setCity(e.target.value);
 }
  

  return (
    <div className={(weather.main.temp !== "") ? ((weather.main.temp > 16) ? 'warm':'app'):'app'}>
      <main>
        <div className="search-box">
          <input 
            className= "search-bar" 
            placeholder="search" 
            onChange = {handleChange} 
            value = {city}></input>
            <button onClick = {fetchWeather}>Search</button>
        </div>
        { weather.main.temp !== ""? (
          <>
            <Location 
              currentDate = {currentDate(new Date())} 
              city = {city} error = {error} 
              setError = {setError} 
              setCity = {setCity} />
            <Weather weather = {weather}/>
          </>
        ):('')}
        <p>{error}</p>
      </main>
    </div>
    
  );
}

export default App;
