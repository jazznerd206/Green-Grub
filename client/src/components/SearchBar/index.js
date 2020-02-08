import React from 'react';
import { TextInput, Icon, Row, Col,Button } from 'react-materialize';


function SearchBar() {
  return (
    <Row>
      <Col>
        <form>
          <Row>
            <Col>
              <TextInput
                icon={<Icon>search</Icon>}
                label="Search"
                onChange={this.handleInput}
                value={this.state.recipeName}
              />
              </Col>
              <Col className="valign-wrapper">
              <Button node="button"style={{ marginRight: '5px'}} waves ="light" onClick={this.searchRecipes}>Search </Button>
              <Button node="button"style={{ marginRight: '5px' }} waves ="light" onClick={this.randomRecipe}>Random Recipe </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
}
export default SearchBar;
