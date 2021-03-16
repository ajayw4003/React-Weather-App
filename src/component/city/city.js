import {React} from 'react';
import "./city.css"

const Location = ({currentDate, city, setError}) => {
      if(!city){
        setError("input is wrong")
      }else{
        setError("");
    }
    return (
      <>
        <div className="location-box">
          <div className="location">{city}</div>
          <div className = "date">{currentDate}</div>
        </div>
      </>
    );
};

export default Location;