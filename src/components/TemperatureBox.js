import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function TemperatureBox({ mainTemp, minTemp, maxTemp, stringWeather }) {
  return (
    <div>
      <Row>
        <Col
          lg={{ span: 2, offset: 5 }}
          xs={{ span: 8, offset: 2 }}
          className="temperature"
        >
          {
            <Alert>
              {Math.round(mainTemp)}
              °C
            </Alert>
          }
        </Col>
        <Col
          lg={{ span: 2, offset: 5 }}
          xs={{ span: 6, offset: 3 }}
          className="weather"
        >
          {
            <Alert>
              {Math.round(minTemp)}
              °C MIN
            </Alert>
          }
        </Col>
        <Col
          lg={{ span: 2, offset: 5 }}
          xs={{ span: 6, offset: 3 }}
          className="weather"
        >
          {
            <Alert>
              {Math.round(maxTemp)}
              °C MAX
            </Alert>
          }
        </Col>
        <Col
          lg={{ span: 2, offset: 5 }}
          xs={{ span: 6, offset: 3 }}
          className="weather"
        >
          {<Alert>{stringWeather}</Alert>}
        </Col>
      </Row>
    </div>
  );
}

export default TemperatureBox;
