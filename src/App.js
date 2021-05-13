import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
//import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import LocationBox from "./components/LocationBox";
import TemperatureBox from "./components/TemperatureBox";
import Loading from "./components/Loading";
import Error from "./components/Error";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const api = {
  //key: process.env.REACT_APP_WEATHER_API_KEY,
  key: "7c65b73889e71f8242cc2cfdca0bb056",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function App() {
  const [inputText, setInputText] = useState("");
  const [city, setCity] = useState("New York, US");
  const [apiResult, setApiResult] = useState({});
  const [isCold, setIsCold] = useState(false);

  const getWeather = useCallback(() => {
    fetch(`${api.base}${city}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setApiResult(result);
      });
  }, [city]);

  const getIsCold = useCallback(() => {
    if (apiResult.main !== undefined && apiResult.main.temp <= 15) {
      setIsCold(true);
    } else {
      setIsCold(false);
    }
  }, [apiResult]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  useEffect(() => {
    getIsCold();
  }, [getIsCold]);

  return (
    <div className={`app ${isCold ? "cold" : ""}`}>
      <Container>
        {/*<Header />*/}
        <SearchBox
          inputText={inputText}
          setInputText={setInputText}
          setCity={setCity}
        />
        {(apiResult.main !== undefined && (
          <div>
            <LocationBox cityName={apiResult.name} />
            <TemperatureBox
              mainTemp={apiResult.main.temp}
              minTemp={apiResult.main.temp_min}
              maxTemp={apiResult.main.temp_max}
              stringWeather={apiResult.weather[0].description}
              iconId={apiResult.weather[0].icon}
              feelsLike={apiResult.main.feels_like}
              humidity={apiResult.main.humidity}
            />
          </div>
        )) ||
          (apiResult.message !== undefined && (
            <Error message={apiResult.message} />
          )) || <Loading />}
      </Container>
    </div>
  );
}

export default App;
