import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <div>
      <Row className="header">
        <Col
          lg={{ span: 6, offset: 3 }}
          xs={{ span: 12, offset: 0 }}
          className="header1"
        >
          <h1>Weather app</h1>
        </Col>
        <Col
          lg={{ span: 6, offset: 3 }}
          xs={{ span: 12, offset: 0 }}
          className="header2"
        >
          <h2>Enter city you want to check weather for</h2>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
