import React, {Component} from 'react';
import { Button, TextInput, Icon, Row, Col, Container} from 'react-materialize';
//import SaveBtn from './SaveBtn/SaveBtn';
//import RandomBtn from './RandomBtn';


class SearchBar extends Component {

  componentDidMount() {
    console.log("mounted");
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
    render() {
      return (
        <Container>
        <Row>
          <Col>
            <form>
              <Row>
                <Col>
                  <TextInput
                    icon={<Icon>search</Icon>}
                    type="text"
                    onChange={this.handleInputChange}
                    name="search"
                    value={this.recipeName}
                  />
                  </Col>
                  <Col className="valign-wrapper">
                  <Button onClick={this.fetchRecipes} node="button"style={{ marginRight: '5px'}} waves ="light">Search </Button>
                  <Button node="button"style={{ marginRight: '5px' }} waves ="light">Random Recipe </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        </Container>
    );
}
}
export default SearchBar;
