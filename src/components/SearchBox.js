import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";

function SearchBox({ inputText, setCity, setInputText }) {
  const inputTextHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      setCity(inputText);
      setInputText("");
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
          />
        </Col>
      </Row>
    </div>
  );
}

export default SearchBox;
