import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Items from "../StoreData";
import { decodeBase64 } from "bcryptjs";


class LoggedIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }



  componentDidMount() {
    //console.log('auth props ' + this.props.auth)
    //console.log(this.state)
    //console.log(this.props.auth)
    let user = this.props.auth.user.id;
    console.log(user);
    let newState = this.state;
    newState.user = user;
    this.setState(newState);
    //console.log(this.state);
    window.location.replace('/');
  }
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
      return (
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
      );
    }
  }

LoggedIn.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(LoggedIn);