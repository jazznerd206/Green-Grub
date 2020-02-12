import React from 'react';
import { TextInput, Icon, Row, Col,Button } from 'react-materialize';


function SearchBar() {
  return (
    <Row>
      <Col s={12}>
        <form>
          <Row>
            <Col s={9}>
              <TextInput
                s={12}
                icon={<Icon>search</Icon>}
                label="Search"
              />
              </Col>
              <Col className="valign-wrapper">
              <Button node="button"style={{ marginRight: '5px'}} waves ="light">Search </Button>
              <Button node="button"style={{ marginRight: '5px' }} waves ="light">Random Recipe </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
}
export default SearchBar;
