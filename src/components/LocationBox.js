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
    <div className="header">
      <Row className="cityName">
        <Alert>{cityName}</Alert>
      </Row>
      <Row className="date">
        <Alert>{getCurrentDate(new Date())}</Alert>
      </Row>
    </div>
  );
}

export default LocationBox;
