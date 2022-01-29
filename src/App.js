import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import LocationBox from "./components/LocationBox";
import Current from "./components/Current";
import Daily from "./components/Daily";
import Loading from "./components/Loading";
import Error from "./components/Error";
//importing bootstrap components

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const api = {
  key: "7c65b73889e71f8242cc2cfdca0bb056",
  base: "https://api.openweathermap.org/data/2.5/onecall?",
};

function App() {
  const [inputText, setInputText] = useState("");
  const [city, setCity] = useState();
  const [apiResult, setApiResult] = useState({});
  const [isCold, setIsCold] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getIsCold = useCallback(() => {
    if (apiResult.current !== undefined && apiResult.current.temp <= 15) {
      setIsCold(true);
    } else {
      setIsCold(false);
    }
  }, [apiResult]);

  const getLatLong = useCallback(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoordinates([position.coords.latitude, position.coords.longitude]);
      fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setCity(result[0].name);
        });
    });
  }, []);

  useEffect(() => {
    getLatLong();
  }, [getLatLong]);

  useEffect(() => {
    if (coordinates.length === 0) {
      return;
    }
    fetch(
      `${api.base}lat=${coordinates[0]}&lon=${coordinates[1]}&exclude=minutely,hourly&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setApiResult(result);
        console.log(result);
      });
  }, [coordinates]);

  useEffect(() => {
    getIsCold();
  }, [getIsCold]);

  return (
    <div className={`app ${isCold ? "cold" : ""}`}>
      <BrowserRouter basename="/react-weather">
        <Container>
          <SearchBox
            inputText={inputText}
            setInputText={setInputText}
            setCity={setCity}
            setCoordinates={setCoordinates}
            setErrorMessage={setErrorMessage}
          />

          {errorMessage !== "" && <Error message={errorMessage} />}
          {(Object.keys(apiResult).length > 0 && (
            <div>
              <Row className="buttons">
                <Col className="link">
                  <Button variant="secondary">
                    <Link to="/">Current</Link>
                  </Button>
                  <Button variant="secondary">
                    <Link to="/daily">Daily</Link>
                  </Button>
                </Col>
              </Row>
              <LocationBox cityName={city} datetime={apiResult.current.dt} />

              <Routes>
                <Route
                  path="/"
                  element={<Current data={apiResult.current} />}
                />
                <Route
                  path="/daily"
                  element={<Daily data={apiResult.daily} />}
                />
              </Routes>
            </div>
          )) || <Loading />}
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
