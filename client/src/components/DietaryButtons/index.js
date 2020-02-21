import React, { Component } from 'react'
import DietaryBar from './DietaryBar'
import API from "../../utils/API";
import { mongo } from 'mongoose';
import './style.css';

class DietarySelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            buttons: ['Vegetarian', 'Vegan', 'Gluten Free', 'Dairy Free', 'Ketogenic', 'Whole 30', 'Sustainable'],
            clicked: false
        }
    }

    componentDidMount() {
    }

    dietaryUpdate = (event) => {
        event.preventDefault();
        const dietType = event.target.attributes.getNamedItem("data-id").value;
        // console.log('data-id ' + dietType)
        // console.log('user id ' + this.props.user._id)
        // console.log('=========== get user here ==============')
        API.getUser(this.props.user._id).then(result => {
            const mongoID = result.data._id;
            // console.log('=========== update user here ==============')
            API.updateUser(mongoID, dietType).then((result) => {
                console.log('update user api call' + result.data)
                console.log('diet event in update ' + dietType);
            })
        })
        this.setState({clicked:true})
      }
    

    render() {
        return (
            <div>
                {!this.state.clicked && this.props.user._id && !this.props.user.diet  ? (
                <div className="selector-container">
                    <h2>Welcome {this.props.user.name}!!</h2>
                    <p>In order to help us give you the results you want for your diet in the most efficient way possible, please pick one preferred diet types from the buttons below.
                    </p>
                    <DietaryBar onClick={this.dietaryUpdate} types={this.state.buttons}/>
                </div>
                ) : (
                <div>
                    {/* add a welcome header here */}
                </div>
                )}
            </div>
        )
    }
}
export default DietarySelector;
