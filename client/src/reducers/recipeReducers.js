import {FETCH_RECIPES } from "../actions/types";

const initialState = {
    items: [],
    item:{}
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_RECIPES:
            default:
                return state;
    }


}