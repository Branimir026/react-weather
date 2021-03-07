import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function Loading({ message }) {
  return (
    <div>
      <Row>
        <Col
          className="error"
          lg={{ span: 6, offset: 3 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Alert>{message}</Alert>
        </Col>
      </Row>
    </div>
  );
}

export default Loading;
