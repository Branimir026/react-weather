import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <div>
      <Row>
        <Col>
          <h1>Weather app</h1>
        </Col>
        <Col>
          <h2>Enter city you want to check weather for</h2>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
