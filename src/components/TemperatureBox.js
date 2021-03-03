import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function TemperatureBox({ apiResult }) {
  return (
    <div>
      <Row>
        <Col
          lg={{ span: 2, offset: 5 }}
          xs={{ span: 8, offset: 2 }}
          className="temperature"
        >
          <Alert>{Math.round(apiResult.main.temp)} °C</Alert>
        </Col>
        <Col
          lg={{ span: 2, offset: 5 }}
          xs={{ span: 6, offset: 3 }}
          className="weather"
        >
          <Alert>{apiResult.weather[0].main}</Alert>
        </Col>
      </Row>
    </div>
  );
}

export default TemperatureBox;
