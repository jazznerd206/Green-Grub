import React, {Component} from 'react';
import { Button, TextInput, Icon, Row, Col, Container} from 'react-materialize';
//import SaveBtn from './SaveBtn/SaveBtn';
//import RandomBtn from './RandomBtn';


class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  componentDidMount() {
    console.log("mounted");
    console.log(this.props);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.fetchRecipes(this.state.searchTerm.trim());
  }

  handleSurpriseClick = event => {
    event.preventDefault();
    //this.props.randomizeRecipe();
  }

    render() {
      console.log("props in render", this.props);
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
                    value={this.state.searchTerm}
                    onChange={this.handleInputChange}
                    name="searchTerm"
                  />
                  </Col>
                  <Col className="valign-wrapper">
                  <Button onClick={this.handleFormSubmit} node="button"style={{ marginRight: '5px'}} waves ="light">Search </Button>
                  <Button onClick = {this.handleSurpriseClick} node="button"style={{ marginRight: '5px' }} waves ="light">Random Recipe </Button>
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
