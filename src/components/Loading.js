import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function Loading() {
  return (
    <div>
      <Row>
        <Col
          className="loading"
          lg={{ span: 6, offset: 3 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Alert>Loading...</Alert>
        </Col>
      </Row>
    </div>
  );
}

export default Loading;
