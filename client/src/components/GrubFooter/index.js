import React, {Component} from 'react';
import { Footer } from 'react-materialize';
import './style.css';
import API from '../../utils/API';


class GrubFooter extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    console.log('footer mounted')
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const zipCode = this.state.zipCode;
    console.log('footer form submitted ' + this.state.zipCode);
    API.getMeetups(zipCode);
  }


  render() {
    return (
      <div className="page-footer footer-container">
        <Footer
          className="footer"
          copyrights="GreenGrub 2020"
          links={<ul><li><a className="grey-text text-lighten-3" href="https://www.github.com/jazznerd206" target="_blank">Andrew Miller</a></li><li><a className="grey-text text-lighten-3" href="#!" target="_blank">Dima Dibb</a></li><li><a className="grey-text text-lighten-3" href="https://www.github.com/tangchristina" target="_blank">Christina Tang</a></li><li><a className="grey-text text-lighten-3" href="#!" target="_blank">Jeff Huang</a></li></ul>}
        >
          {/* <h5 className="white-text">
            Being healthy is more than just eating well...
          </h5>
          <form >
            <label htmlFor="zipCode">Enter your zip code to search for meetups in your area!!</label>
            <input type="text" id="zipCode" name="zipCode" onChange={this.handleInputChange}></input>
            <input type="submit" value="Submit" onClick={this.handleFormSubmit}></input>
          </form> */}
        </Footer>
      </div>
    )
  }
}


export default GrubFooter;