import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import TemperatureBox from "./TemperatureBox";

function Current({ data }) {
  return (
    <div>
      <TemperatureBox
        mainTemp={data.temp}
        sunrise={data.sunrise}
        sunset={data.sunset}
        stringWeather={data.weather[0].description}
        iconId={data.weather[0].icon}
        feelsLike={data.feels_like}
        humidity={data.humidity}
        datetime={data.dt}
        windDeg={data.wind_deg}
        windSpeed={data.wind_speed}
      />
    </div>
  );
}

export default Current;
