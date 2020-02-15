import React, {Component} from 'react';
import { Button, TextInput, Icon, Row, Col, Container} from 'react-materialize';
//import SaveBtn from './SaveBtn/SaveBtn';
//import RandomBtn from './RandomBtn';
import './style.css';


class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  componentDidMount() {
    //console.log("mounted");
    //console.log(this.props);
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
  //=========================================================
  // insert a function to call the user based on id from the database to retrieve diet data
  //=========================================================

    render() {
      console.log('render ' + this.props.user)
      return (
      // this is the container div for the ternary
        <div >
          {/* this is the first option for the ternary, if the user is not logged in then return the search bar with no customization */}
          <div>{!this.props.user ? (
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
                          className="inputbar"
                        />
                        </Col>
                        <Col className="valign-wrapper">
                        <Button onClick={this.handleFormSubmit} node="button"style={{ marginRight: '5px'}} waves ="light">Search </Button>
                        <Button node="button"style={{ marginRight: '5px' }} waves ="light">Random Recipe </Button>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Container>
          ) : (
            // this is where the second option for the ternary returns. make the buttons here
            //========================================================================//
            // make sure the ternary conditions are set for the following:
            // 1. if this.props.user doesnt exist, render the search bar
            // 2. if this.props.user does exist, render the diet buttons UNLESS DIET HAS ALREADY BEEN SET, IN WHICH CASE RENDER THE SEARCH BAR
            <Container>
              <Row>
              {/* here we can add a suggested recipe of the day based on dietary restrictions in the user model */}
              {/* here we can add the buttons for selecting diet model */}
              </Row>
            </Container>
          )}

          </div>

        </div>


        
    );
}
}
export default SearchBar;
