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
                <h2>DIETARY BUTTONS</h2>
                    <DietaryBar types={this.state.buttons}/>
                </div>
        )
    }
}
export default DietarySelector;
