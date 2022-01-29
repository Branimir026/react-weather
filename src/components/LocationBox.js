import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

function LocationBox({ cityName }) {
  return (
    <div className="header">
      <Row className="cityName">
        <Alert>{cityName}</Alert>
      </Row>
    </div>
  );
}

export default LocationBox;
