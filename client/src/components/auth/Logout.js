import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Items from "../StoreData";
import { decodeBase64 } from "bcryptjs";


// =======================
// REDUX BASED COMPONENT
// =======================


class Logout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }



  componentDidMount() {
    console.log('logout button')
  }
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    window.location.replace('/')
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

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Logout);