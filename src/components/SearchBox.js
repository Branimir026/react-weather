import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";

function SearchBox({
  inputText,
  setCity,
  setCoordinates,
  setInputText,
  setErrorMessage,
}) {
  const inputTextHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (inputText.trim() === "") {
      return;
    }
    if (e.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${inputText}&limit=1&appid=7c65b73889e71f8242cc2cfdca0bb056`
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.length !== 0) {
            console.log(result);
            setCoordinates([result[0].lat, result[0].lon]);
            setCity(result[0].name);
            setInputText("");
            setErrorMessage("");
          } else {
            setErrorMessage("Something went wrong, please try another city");
          }
        });
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <FormControl
            className="searchBox"
            placeholder="Search and press enter.."
            aria-label="Search"
            onChange={inputTextHandler}
            onKeyPress={handleKeyPress}
            value={inputText}
          />
        </Col>
      </Row>
    </div>
  );
}

export default SearchBox;
