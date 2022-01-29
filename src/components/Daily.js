import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import TemperatureBox from "./TemperatureBox";

function Daily({ data }) {
  return (
    <div>
      {data.map((day, i) => {
        return (
          <TemperatureBox
            mainTemp={day.temp.day}
            sunrise={day.sunrise}
            sunset={day.sunset}
            stringWeather={day.weather[0].description}
            iconId={day.weather[0].icon}
            feelsLike={day.feels_like.day}
            humidity={day.humidity}
            datetime={day.dt}
            windDeg={day.wind_deg}
            windSpeed={day.wind_speed}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default Daily;
