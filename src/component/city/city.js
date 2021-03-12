import {React} from 'react';
import "./city.css"

const Location = ({currentDate, city}) => {
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