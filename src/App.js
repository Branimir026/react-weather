import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import LocationBox from "./components/LocationBox";
import TemperatureBox from "./components/TemperatureBox";
import Loading from "./components/Loading";
import Error from "./components/Error";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function App() {
  const [inputText, setInputText] = useState("");
  const [city, setCity] = useState("New York, US");
  const [apiResult, setApiResult] = useState({});

  const getWeather = useCallback(() => {
    fetch(`${api.base}${city}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setApiResult(result);
      });
  }, [city]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <div className="app">
      <Container>
        <Header />
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
              stringWeather={apiResult.weather[0].main}
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
