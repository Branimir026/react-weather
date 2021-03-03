import React from "react";
//importing bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

function SearchBox({ inputText, setCity, setInputText }) {
  const inputTextHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setCity(inputText);
    setInputText("");
  };

  return (
    <div>
      <Row className="searchBox">
        <Col
          lg={{ span: 5, offset: 3 }}
          xs={{ span: 12, offset: 0 }}
          className="searchInputBox"
        >
          <FormControl
            className="searchInput"
            placeholder="Search.."
            aria-label="Search"
            onChange={inputTextHandler}
            value={inputText}
          />
        </Col>
        <Col
          lg={{ span: 1, offset: 0 }}
          xs={{ span: 4, offset: 4 }}
          className="searchButtonBox"
        >
          <Button
            className="searchButton"
            variant="primary"
            onClick={searchHandler}
          >
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SearchBox;
