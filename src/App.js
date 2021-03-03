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
  key: "7c65b73889e71f8242cc2cfdca0bb056",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function App() {
  const [inputText, setInputText] = useState("");
  const [city, setCity] = useState("New York, US");
  const [apiResult, setApiResult] = useState({});
  const [apiError, setApiError] = useState(null);

  const getWeather = useCallback(() => {
    fetch(`${api.base}${city}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setApiResult(result);
          console.log(result);
        },
        (error) => {
          setApiError(error);
        }
      );
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
        {typeof apiResult.main != "undefined" ? (
          <div>
            <LocationBox apiResult={apiResult} />
            <TemperatureBox apiResult={apiResult} />
          </div>
        ) : typeof apiResult.message != "undefined" ? (
          <Error apiResult={apiResult} />
        ) : (
          <Loading />
        )}
      </Container>
    </div>
  );
}

export default App;
