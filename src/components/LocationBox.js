import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function LocationBox({ cityName }) {
  const getCurrentDate = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let stringDay = days[d.getDay()];
    let numDay = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${stringDay} ${numDay} ${month} ${year}`;
  };

  return (
    <div>
      <Row>
        <Col
          lg={{ span: 6, offset: 3 }}
          xs={{ span: 12, offset: 0 }}
          className="location"
        >
          <Alert>{cityName}</Alert>
        </Col>
        <Col
          lg={{ span: 4, offset: 4 }}
          xs={{ span: 8, offset: 2 }}
          className="date"
        >
          <Alert>{getCurrentDate(new Date())}</Alert>
        </Col>
      </Row>
    </div>
  );
}

export default LocationBox;
