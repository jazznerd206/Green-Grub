import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import './style.css';


// ============================
// this component is for updating user settings. it will show current values above the inputs for the new values to update the mongo document. if one field is left blank, it will be assumed that value is not to be changed.
// ============================


class Settings extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }



    componentDidMount() {

    }


    render() {
        return (
            <div className="container login ">
            <div style={{ marginTop: "4rem" }} className="row">
              <div className="col s8 offset-s2">
                <Link to="/" className="btn-flat waves-effect">
                  <i className="material-icons left">keyboard_backspace</i> Back to
                  home
                </Link>
                <form noValidate>
                <div className="col s12">
                  <label htmlFor="name">Current Name:</label>
                  {/* <p>{this.props.user.name}</p> */}
                </div>
                <div className="input-field col s12">
                  <label htmlFor="name">New Name:</label>
                  <input
                    
                  />
                </div>
                <div className="col s12">
                  <label htmlFor="name">Current Name:</label>
                  {/* <p>{this.props.user.email}</p> */}
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Email</label>
                  <input
                  />
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Change Settings
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        );
    }
}
export default Settings;