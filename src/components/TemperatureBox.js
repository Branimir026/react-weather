import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function TemperatureBox({
  mainTemp,
  sunset,
  sunrise,
  stringWeather,
  iconId,
  feelsLike,
  humidity,
  datetime,
  windDeg,
  windSpeed,
}) {
  function timeConverter(UNIX_timestamp, full = true) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var time;
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    hour = ("0" + hour).slice(-2);
    var min = a.getMinutes();
    min = ("0" + min).slice(-2);
    var sec = a.getSeconds();
    sec = ("0" + sec).slice(-2);
    if (full) {
      time =
        date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    } else {
      time = hour + ":" + min + ":" + sec;
    }

    return time;
  }

  function getDayName(date) {
    var a = new Date(date * 1000);
    return a.toLocaleDateString("en-US", { weekday: "long" });
  }

  function degToCompass(num) {
    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  }

  return (
    <div className="temperatureBox">
      <Row>
        <Alert className="currentDay">{getDayName(datetime)}</Alert>
      </Row>

      <Row>
        <Alert className="currentDate">
          <span>{timeConverter(datetime)}</span>
        </Alert>
      </Row>

      <Row className="tempInfo">
        <Col lg={6} xs={12}>
          <Row className="mainTempBox">
            <Col lg={6} xs={12} className="iconImg">
              <Image
                src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}
              />
            </Col>
            <Col lg={6} xs={12} className="temp">
              <Col xs={12} className="stringTempBox">
                <Alert className="mainTemp">{Math.round(mainTemp)}°C</Alert>
              </Col>
              <Col xs={12}>
                <Alert className="stringWeather">
                  {stringWeather.toUpperCase()}
                </Alert>
              </Col>
            </Col>
          </Row>
        </Col>

        <Col lg={6} xs={12}>
          <Row className="statsTemp">
            <Col lg={6} xs={12}>
              <hr />
              <Alert className="feelsLike">{Math.round(feelsLike)}°C</Alert>
              <p>FEELS LIKE</p>
            </Col>
            <Col lg={6} xs={12}>
              <hr />
              <Alert className="humidity">{humidity} %</Alert>
              <p>HUMIDITY</p>
            </Col>
            <Col lg={6} xs={12}>
              <hr />
              <Alert className="sunrise">{timeConverter(sunrise, false)}</Alert>
              <p>SUNRISE</p>
            </Col>
            <Col lg={6} xs={12}>
              <hr />
              <Alert className="sunset">{timeConverter(sunset, false)}</Alert>
              <p>SUNSET</p>
            </Col>
            <Col lg={6} xs={12}>
              <hr />
              <Alert className="windDeg">
                {degToCompass(windDeg)}&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{ transform: `rotate(${windDeg}deg)` }}
                />
              </Alert>
              <p>WIND DIRECTION</p>
            </Col>
            <Col lg={6} xs={12}>
              <hr />
              <Alert className="windSpeed">{windSpeed} Km/h</Alert>
              <p>WIND SPEED</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default TemperatureBox;
