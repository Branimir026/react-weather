import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

function TemperatureBox({
  mainTemp,
  minTemp,
  maxTemp,
  stringWeather,
  iconId,
  feelsLike,
  humidity,
}) {
  return (
    <div>
      <Row className="temperatureBox">
        <Col lg={6} xs={12}>
          <Row className="mainTempBox">
            <Col lg={6} xs={12} className="iconImg">
              <Image
                src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}
              />
            </Col>
            <Col lg={6} xs={12} className="temp">
              <Row className="stringTempBox">
                <Alert className="mainTemp">{Math.round(mainTemp)}°C</Alert>
                <Alert className="stringWeather">{stringWeather}</Alert>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={6} xs={12}>
          <Row className="statsTemp">
            <Col lg={6} xs={12}>
              <Alert className="feelsLike">
                {Math.round(feelsLike)}°C
                <br />
                <p>FEELS LIKE</p>
              </Alert>
            </Col>
            <Col lg={6} xs={12}>
              <Alert className="maxTemp">
                {Math.round(maxTemp)}°C <br /> <p>MAX</p>
              </Alert>
            </Col>
            <Col lg={6} xs={12}>
              <Alert className="humidity">
                {Math.round(humidity)}% <br />
                <p>HUMIDITY</p>
              </Alert>
            </Col>
            <Col lg={6} xs={12}>
              <Alert className="minTemp">
                {Math.round(minTemp)}°C <br />
                <p>MIN</p>
              </Alert>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default TemperatureBox;
