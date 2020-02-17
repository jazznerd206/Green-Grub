import React, { Component } from 'react'
import DietaryBar from './DietaryBar'

class DietarySelector extends Component {

    constructor(props){
        super(props);
        this.state = {
            buttons: ['low fat', 'high protein', 'vegetarian', 'vegan', 'gluten free']
        }
    }

    render() {
        return (
            <div>
                {!this.props.user.diet ? (
                <div>
                    <h2>Welcome {this.props.user.name}!!</h2>
                    <p>In order to help your diet in the most efficient way possible, please pick one preferred diet type from the buttons below.</p>
                    <DietaryBar types={this.state.buttons}/>
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
