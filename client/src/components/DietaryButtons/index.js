import React, { Component } from 'react'
import DietaryBar from './DietaryBar'
import API from "../../utils/API";
import { mongo } from 'mongoose';

class DietarySelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            buttons: ['low fat', 'high protein', 'vegetarian', 'vegan', 'gluten free']
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
                // console.log('update user api call' + result.data)
                // console.log('id in update ' + mongoID);
                // console.log('diet event in update ' + dietType);
            })
        })

      }
    

    render() {
        return (
            <div>
                {this.props.user._id && !this.props.user.diet  ? (
                <div>
                    <h2>Welcome {this.props.user.name}!!</h2>
                    <p>In order to help your diet in the most efficient way possible, please pick one preferred diet type from the buttons below.
                    </p>
                    <DietaryBar onClick={this.dietaryUpdate} types={this.state.buttons}/>
                </div>
                ) : (
                <div>

                </div>
                )}
            </div>
        )
    }
}
export default DietarySelector;
