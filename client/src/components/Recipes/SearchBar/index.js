import React, {Component} from 'react';
import { Button, TextInput, Icon, Row, Col, Container} from 'react-materialize';
//import SaveBtn from './SaveBtn/SaveBtn';
//import RandomBtn from './RandomBtn';



class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={
      query: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event){
    this.setState({[event.target.name]:event.target.value});
  }

  onClick(event){
    event.preventDefault();
    const recipe = {
      query: this.state.query
    }

    const apiKey = "?apiKey=" + process.env.REACT_APP_API_KEY;
    console.log(process.env.REACT_APP_API_KEY);
    console.log(`Api key: ${process.env.REACT_APP_API_KEY}` );
    fetch(`https://api.spoonacular.com/recipes/search?query=${recipe}` + apiKey, {
    method: 'POST',
    headers: { 
      'content-type': 'application/json'
    },
    body: JSON.stringify(recipe)
    })
    .then(res=>res.json())
    .then(data=> console.log(data));


  }

    render(){
      return (
        <Container>
        <Row>
          <Col>
            <form onClick = {this.onClick}>
              <Row>
                <Col>
                  <TextInput
                    icon={<Icon>search</Icon>}
                    type="text"
                    name="search"
                    onChange={this.onChange}
                    value={this.state.query}
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
        </Container>
    );
  }
}
export default SearchBar;
